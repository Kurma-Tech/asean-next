import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useRef, useState } from 'react';

mapboxgl.accessToken =
  'pk.eyJ1Ijoia3VybWF0ZWNoIiwiYSI6ImNsNWtrdTV5YzBheXQzZG80OGl2ZXk5aDUifQ.2SFfh7OhP2CTOyVeV3hSjw';

import styles from './MapLayout.module.css';

export interface IMapLayout {}

const MapLayout: React.FC<IMapLayout> = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/kurmatech/cl7eioz5w000c14pjviwzu3sq',
      center: [lng, lat],
      zoom: zoom,
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
