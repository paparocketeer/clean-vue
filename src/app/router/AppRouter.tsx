import { useLocation } from 'react-router-dom';

import { Auth } from '../providers/auth';
import { AuthorizedRoutes } from './authorized/routes';
import { UnAuthorizedRoutes } from './unauthorized/routes';
import { unauthorizedPagesList } from './unauthorized/unauthorizedPages';

export const AppRouter = () => {
  const { pathname } = useLocation();

  if (unauthorizedPagesList.includes(pathname)) {
    return <UnAuthorizedRoutes />;
  }

  return (
    <Auth>
      <AuthorizedRoutes />
    </Auth>
  );
};
