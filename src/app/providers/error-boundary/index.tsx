import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorBoundaryFallback } from './ui/error-boundary-fallback';

export const withErrorBoundary = (component: () => React.ReactNode) =>
  function WrapperErrorBoundary() {
    return (
      <ErrorBoundary fallbackRender={ErrorBoundaryFallback}>
        {component()}
      </ErrorBoundary>
    );
  };
