import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthorizedLayout } from 'src/app/layouts';
import { useSubscriber } from 'src/shared/hooks/useSubscriber';
import { FullPageLoader } from 'src/shared/ui';

import { iisunoPages } from './iisunoPages';

export const AuthorizedRoutes = () => {
  const { isLoading } = useSubscriber();

  if (isLoading) {
    return <FullPageLoader />;
  }

  return (
    <AuthorizedLayout>
      <Routes>
        {iisunoPages.map((el) => (
          <Route
            path={el.path}
            key={el.path}
            element={el.element}
          />
        ))}
      </Routes>
    </AuthorizedLayout>
  );
};
