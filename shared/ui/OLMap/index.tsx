import TileLayer from 'ol/layer/Tile.js';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import View from 'ol/View.js';
import React, { useEffect } from 'react';

import { OLMapId } from './constants';
import styles from './styles.module.scss';

export const OlMap = () => {
  useEffect(() => {
    new Map({
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: OLMapId,
    });
  }, []);

  return (
    <div
      className={styles.wrapper}
      id={OLMapId}
    />
  );
};
