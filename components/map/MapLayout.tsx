import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  mapSelectors,
  updateLocation,
  updateZoom,
} from '../../lib/features/map/mapSlice';
import styles from './MapLayout.module.css';

export interface IMapLayout {}

const MapLayout: React.FC<IMapLayout> = () => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoia3VybWF0ZWNoIiwiYSI6ImNsNWtrdTV5YzBheXQzZG80OGl2ZXk5aDUifQ.2SFfh7OhP2CTOyVeV3hSjw';
  const mapContainer = useRef(null);
  const longitude = useSelector(mapSelectors.selectLongitude);
  const latitude = useSelector(mapSelectors.selectLatitude);
  const zoom = useSelector(mapSelectors.selectZoom);
  const dispatch = useDispatch();
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/kurmatech/cl7eioz5w000c14pjviwzu3sq',
      center: [longitude, latitude],
      zoom: zoom,
      antialias: true,
      attributionControl: false,
      maxBounds: [
        [91.56216158463567, -10.491532410391958],
        [141.79211516906793, 27.60302090835848],
      ],
    }) as any;
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    (map.current as any).on('move', () => {
      dispatch(
        updateLocation([
          (map.current as any).getCenter().lat.toFixed(4),
          (map.current as any).getCenter().lng.toFixed(4),
        ])
      );
      dispatch(updateZoom((map.current as any).getZoom().toFixed(2)));
    });
  });
  return <div ref={mapContainer} className={styles.mapContainer} />;
};

export default MapLayout;
