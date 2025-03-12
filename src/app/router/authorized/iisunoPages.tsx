import { lazy } from 'react';
import { PATHS } from 'src/constants';

const Administration = lazy(() => import('src/shared/pages/Administration'));
const Controller = lazy(() => import('src/shared/pages/Controller'));
const CreateUser = lazy(() => import('src/shared/pages/CreateUser'));
const Groups = lazy(() => import('src/shared/pages/Groups'));
const GroupsItem = lazy(() => import('src/shared/pages/GroupsItem'));
const UserItem = lazy(() => import('src/shared/pages/UserItem'));
const UsersList = lazy(() => import('src/shared/pages/UsersList'));
const Schedule = lazy(() => import('src/shared/pages/Schedule'));

const SupportsView = lazy(
  () => import('src/shared/pages/Registry/pages/Supports/view')
);
const ControllersSHUNOView = lazy(
  () => import('src/shared/pages/Registry/pages/ControllersSHUNO/view')
);
const ControllersSHUNOEdit = lazy(
  () => import('src/shared/pages/Registry/pages/ControllersSHUNO/edit')
);
const ObjectsNOView = lazy(
  () => import('src/shared/pages/Registry/pages/ObjectsNO/view')
);
const ObjectsNOEdit = lazy(
  () => import('src/shared/pages/Registry/pages/ObjectsNO/edit')
);
const Registry = lazy(() => import('src/shared/pages/Registry/view'));

export const iisunoPages: IRoute[] = [
  // registry
  {
    element: <Registry />,
    path: PATHS.protected.iisuno.registry.index(),
  },
  {
    element: <SupportsView />,
    path: PATHS.protected.iisuno.registry.supports.index(),
  },
  {
    element: <ControllersSHUNOView />,
    path: PATHS.protected.iisuno.registry.controllersSHUNO.index(),
  },
  {
    element: <ControllersSHUNOEdit />,
    path: PATHS.protected.iisuno.registry.controllersSHUNO.edit(),
  },
  {
    element: <ObjectsNOView />,
    path: PATHS.protected.iisuno.registry.objectsNO.index(),
  },
  {
    element: <ObjectsNOEdit />,
    path: PATHS.protected.iisuno.registry.objectsNO.edit(),
  },
  //utils
  {
    element: <Administration />,
    path: PATHS.protected.iisuno.administration.index(),
  },
  {
    element: <CreateUser />,
    path: PATHS.protected.iisuno.administration.createUser(),
  },
  {
    element: <UserItem />,
    path: PATHS.protected.iisuno.administration.userItem(),
  },
  {
    element: <UsersList />,
    path: PATHS.protected.iisuno.administration.users(),
  },
  // controllers
  {
    element: <Groups />,
    path: PATHS.protected.iisuno.groups.index(),
  },
  {
    element: <GroupsItem />,
    path: PATHS.protected.iisuno.groups.groupItem(),
  },
  {
    element: <Controller />,
    path: PATHS.protected.iisuno.groups.controller(),
  },
  // utility
  {
    element: <Schedule />,
    path: PATHS.protected.iisuno.utility.schedule.index(),
  },
];
