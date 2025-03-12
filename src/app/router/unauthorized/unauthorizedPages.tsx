import { lazy } from 'react';
import { PATHS } from 'src/constants';

const Welcome = lazy(() => import('src/shared/pages/unauthorized/Welcome'));
const SupportForm = lazy(
  () => import('src/shared/pages/unauthorized/SupportForm')
);
const FAQ = lazy(() => import('src/shared/pages/unauthorized/FAQ'));
const ForgotPass = lazy(
  () => import('src/shared/pages/unauthorized/ForgotPass')
);
const RestorePassword = lazy(
  () => import('src/shared/pages/unauthorized/RestorePassword')
);

export const unauthorizedPages: IRoute[] = [
  {
    element: <SupportForm />,
    path: PATHS.unAuthorized.supportForm.index(),
  },
  {
    element: <Welcome />,
    path: PATHS.unAuthorized.welcome.index(),
  },
  {
    element: <FAQ />,
    path: PATHS.unAuthorized.faq.index(),
  },
  {
    element: <ForgotPass />,
    path: PATHS.unAuthorized.forgotPassword.index(),
  },
  {
    element: <RestorePassword />,
    path: PATHS.unAuthorized.restorePassword.index(),
  },
];

export const unauthorizedPagesList = [
  PATHS.unAuthorized.supportForm.index(),
  PATHS.unAuthorized.welcome.index(),
  PATHS.unAuthorized.faq.index(),
  PATHS.unAuthorized.forgotPassword.index(),
  PATHS.unAuthorized.restorePassword.index(),
];
