import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useRef, useState } from 'react';

import styles from './MapLayout.module.css';

export interface IMapLayout {}

const MapLayout: React.FC<IMapLayout> = () => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoia3VybWF0ZWNoIiwiYSI6ImNsNWtrdTV5YzBheXQzZG80OGl2ZXk5aDUifQ.2SFfh7OhP2CTOyVeV3hSjw';
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(111.09841688936865);
  const [lat, setLat] = useState(2.37304225637002);
  const [zoom, setZoom] = useState(5);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/kurmatech/cl7eioz5w000c14pjviwzu3sq',
      center: [lng, lat],
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
      setLng((map.current as any).getCenter().lng.toFixed(4));
      setLat((map.current as any).getCenter().lat.toFixed(4));
      setZoom((map.current as any).getZoom().toFixed(2));
    });
  });
  return <div ref={mapContainer} className={styles.mapContainer} />;
};

export default MapLayout;
