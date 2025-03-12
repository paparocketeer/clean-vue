import compose from 'compose-function';

import { withErrorBoundary } from './error-boundary';
import { withStyledEngine } from './mui';
import { withNotificationProvider } from './notification';
import { withStore } from './store/with-store';

export const withProviders = compose(
  withStore,
  withErrorBoundary,
  withNotificationProvider,
  withStyledEngine
);
