import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from './config';

export const withStore = (component: () => ReactNode) =>
  function StoreProvider() {
    return <Provider store={store}>{component()}</Provider>;
  };
