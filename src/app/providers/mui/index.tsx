import { StyledEngineProvider } from '@mui/material';
import React from 'react';

export const withStyledEngine = (component: () => React.ReactNode) =>
  function WrapperStyledEngine() {
    return (
      <StyledEngineProvider injectFirst>{component()}</StyledEngineProvider>
    );
  };
