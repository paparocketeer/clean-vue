import 'dayjs/locale/ru';
import './styles/index.scss';
import './styles/main.css';
import 'react-virtualized/styles.css';

import { ThemeProvider } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { FullPageLoader } from 'src/shared/ui';

import { withProviders } from './providers';
import { theme } from './providers/mui/theme';
import { AppRouter } from './router/AppRouter';

dayjs.locale('ru');

export const App = withProviders(() => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale={'ru'}>
          <Suspense fallback={<FullPageLoader />}>
            <AppRouter />
          </Suspense>
        </LocalizationProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
});
