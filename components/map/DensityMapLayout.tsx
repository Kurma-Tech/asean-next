import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
import { useCallback, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import {
  clearDensityMapStateData,
  clearDensityRemoveRequest,
} from '../../lib/features/densityMapData/densityMapDataAction';
import { mapSelectors } from '../../lib/features/map/mapSlice';
import { RootState } from '../../lib/store/store';
import styles from './MapLayout.module.css';

export interface IDensityMapLayout {}

const DensityMapLayout: React.FC<IDensityMapLayout> = () => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoia3VybWF0ZWNoIiwiYSI6ImNsNWtrdTV5YzBheXQzZG80OGl2ZXk5aDUifQ.2SFfh7OhP2CTOyVeV3hSjw';
  const mapContainer = useRef(null);
  const longitude = useSelector(mapSelectors.selectLongitude);
  const latitude = useSelector(mapSelectors.selectLatitude);
  const zoom = useSelector(mapSelectors.selectZoom);
  const dispatch = useDispatch();
  const map = useRef(null);
  const data = useSelector(
    (state: RootState) => state.densityMapData.data,
    shallowEqual
  );
  const removeDensityRequest = useSelector(
    (state: RootState) => state.densityMapData.removeDensityRequest
  );

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/kurmatech/cl7eioz5w000c14pjviwzu3sq',
      center: [longitude, latitude],
      zoom: zoom,
      minZoom: 6,
      antialias: true,
      attributionControl: false,
      maxBounds: [
        [91.56216158463567, -10.491532410391958],
        [141.79211516906793, 27.60302090835848],
      ],
    }) as any;

    var nav = new mapboxgl.NavigationControl();
    (map.current as any).addControl(nav, 'bottom-right');
  });

  const removeLayers = useCallback(() => {
    var mapLayer = (map.current as any).getLayer('state-business-density');
    if (typeof mapLayer !== 'undefined') {
      (map.current as any).removeLayer('state-business-density');
    }

    var mapSource = (map.current as any).getSource('business-density');
    if (typeof mapSource !== 'undefined') {
      (map.current as any).removeSource('business-density');
    }

    dispatch(clearDensityRemoveRequest());
  }, [dispatch, map]);

  const boilerplate = useCallback(async () => {
    if (removeDensityRequest) {
      removeLayers();
    }

    if (data.length > 0) {
      (map.current as any).addSource('business-density', {
        type: 'vector',
        url: 'mapbox://kurmatech.7s6qx4no',
      });
      const matchExpression = ['match', ['get', 'long']];
      for (const row of data) {
        // Convert the range of data values to a suitable color
        var color = `(0, 0, 0)`;
        if (row['value'] > 0 && row['value'] <= 500) {
          color = '#F2F12D';
        } else if (row['value'] > 500 && row['value'] <= 750) {
          color = '#E6B71E';
        } else if (row['value'] > 750 && row['value'] <= 1000) {
          color = '#DA9C20';
        } else if (row['value'] > 1000 && row['value'] <= 2500) {
          color = '#CA8323';
        } else if (row['value'] > 2500 && row['value'] <= 5000) {
          color = '#B86B25';
        } else if (row['value'] > 5000 && row['value'] <= 7500) {
          color = '#A25626';
        } else if (row['value'] > 7500 && row['value'] <= 10000) {
          color = '#8B4225';
        } else if (row['value'] > 10000) {
          color = '#723122';
        }
        matchExpression.push(row['key'], color);
      }
      matchExpression.push('rgba(0, 0, 0, 0)');

      (map.current as any).addLayer({
        id: 'state-business-density',
        source: 'business-density',
        'source-layer': 'ph-region-4myng8',
        type: 'fill',
        paint: {
          'fill-color': matchExpression,
          'fill-opacity': 0.6,
        },
      });
      dispatch(clearDensityMapStateData());
    }
  }, [dispatch, data, removeLayers, removeDensityRequest]);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    boilerplate();
  }, [boilerplate]);
  return <div ref={mapContainer} className={styles.mapContainer} />;
};

export default DensityMapLayout;
