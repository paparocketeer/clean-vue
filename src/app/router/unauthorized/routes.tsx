import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import { unauthorizedPages } from './unauthorizedPages';

export const UnAuthorizedRoutes = () => {
  return (
    <Routes>
      {unauthorizedPages.map((el) => (
        <Route
          path={el.path}
          key={el.path}
          element={el.element}
        />
      ))}
    </Routes>
  );
};
