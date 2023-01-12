import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useCallback, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { FilterValuesState } from '../../lib/features/filter/filterValuesReducer';
import {
  mapSelectors,
  updateLocation,
  updateZoom,
} from '../../lib/features/map/mapSlice';
import {
  addPage,
  clearMapStateData,
  clearPages,
  clearRemoveRequest,
  updateMapData,
} from '../../lib/features/mapData/mapDataAction';
import { RootState } from '../../lib/store/store';
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
  const businessPoints = useSelector(
    (state: RootState) => state.mapData.business,
    shallowEqual
  );
  const paginationLink = useSelector(
    (state: RootState) => state.mapData.paginationLink
  );
  // const flag = useSelector((state: RootState) => state.mapData.flag);
  const pageNumber = useSelector((state: RootState) => state.mapData.page);
  const removeRequest = useSelector(
    (state: RootState) => state.mapData.removeRequest
  );
  const filterStateData: FilterValuesState = useSelector(
    (state: RootState) => state.filterValues,
    shallowEqual
  );

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

  const paginate = useCallback(async () => {
    if (paginationLink) {
      dispatch(await updateMapData(filterStateData, paginationLink));
    }
  }, [dispatch, paginationLink, filterStateData]);

  const removeLayers = useCallback(() => {
    for (let index = 0; index <= pageNumber; index++) {
      var mapLayer = (map.current as any).getLayer('business-point' + index);
      if (typeof mapLayer !== 'undefined') {
        (map.current as any)
          .removeLayer('business-point' + index)
          .removeSource('business' + index);
      }
    }
    dispatch(clearRemoveRequest());
    dispatch(clearPages());
  }, [dispatch, pageNumber]);

  const boilerplate = useCallback(async () => {
    if (removeRequest) {
      removeLayers();
    }
    if (businessPoints.length > 0) {
      console.log('pageNumber:' + pageNumber);
      console.log(removeRequest);

      (map.current as any).addSource('business' + pageNumber, {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: businessPoints },
      });
      (map.current as any).addLayer({
        id: 'business-point' + pageNumber,
        type: 'circle',
        source: 'business' + pageNumber,
        minzoom: 0,
        paint: {
          'circle-radius': {
            base: 1.75,
            stops: [
              [0, 1.5],
              [12, 2.5],
              [15, 8],
              [18, 12],
            ],
          },
          'circle-color': 'rgba(242, 94, 94, 1)',
        },
      });
      dispatch(clearMapStateData());
      dispatch(addPage());
      await paginate();
    }
    (map.current as any).on('move', () => {
      dispatch(
        updateLocation([
          (map.current as any).getCenter().lat.toFixed(4),
          (map.current as any).getCenter().lng.toFixed(4),
        ])
      );
      dispatch(updateZoom((map.current as any).getZoom().toFixed(2)));
    });
  }, [
    businessPoints,
    dispatch,
    pageNumber,
    paginate,
    removeLayers,
    removeRequest,
  ]);
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    boilerplate().then(() => {});
  }, [boilerplate]);
  return <div ref={mapContainer} className={styles.mapContainer} />;
};

export default MapLayout;
