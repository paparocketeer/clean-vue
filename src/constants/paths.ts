import { getPath } from './getPath';

export const PATHS = {
  protected: {
    utility: {
      schedule: {
        index: () => '/schedule',
      },
    },
    iisuno: {
      groups: {
        index: () => '/groups',
        groupItem: (id?: string | number) =>
          getPath(
            '/groups/:groupId',
            id && {
              ':groupId': id,
            }
          ),
        controller: (
          groupId?: string | number,
          controllerId?: string | number
        ) =>
          getPath(
            '/groups/:groupId/:controllerId',
            groupId && {
              ':groupId': groupId,
              ':controllerId': controllerId,
            }
          ),
      },
      administration: {
        index: () => '/utils',
        users: () => '/utils/users',
        userItem: (id?: string | number) =>
          getPath(
            '/utils/users/:id',
            id && {
              ':id': id,
            }
          ),
        createUser: () => '/utils/user/new',
      },
      reports: {
        index: () => '/reports',
      },
      registry: {
        index: () => '/registry',
        controllersSHUNO: {
          index: () => getPath('/registry/controllers-shuno'),
          edit: (itemId?: string | number) =>
            getPath(
              '/registry/controllers-shuno/:itemId/edit',
              itemId && {
                ':itemId': itemId,
              }
            ),
        },
        supports: {
          index: () => getPath('/registry/supports'),
          edit: (itemId?: string | number) =>
            getPath(
              '/registry/supports/:itemId/edit',
              itemId && {
                ':itemId': itemId,
              }
            ),
        },
        objectsNO: {
          index: () => getPath('/registry/objects-no'),
          edit: (itemId?: string | number) =>
            getPath(
              '/registry/objects-no/:itemId/edit',
              itemId && {
                ':itemId': itemId,
              }
            ),
        },
      },
      utility: {
        schedule: {
          index: () => '/schedule',
        },
      },
    },
  },
  utility: {
    login: {
      index: () => '/login',
    },
    setting: {
      index: () => '/setting',
    },
    support: {
      index: () => '/support',
    },
    schedule: {
      index: () => '/schedule',
    },
    forgotPassword: {
      index: () => '/forgot-password',
    },
    restorePassword: {
      index: () => '/restore-password',
    },
    faq: {
      index: () => '/FAQ',
    },
  },
  unAuthorized: {
    welcome: {
      index: () => '/',
    },
    supportForm: {
      index: () => '/support-form',
    },
    faq: {
      index: () => '/faq',
    },
    forgotPassword: {
      index: () => '/forgot-password',
    },
    restorePassword: {
      index: () => '/restore-password',
    },
    auth: {
      index: () => '/auth',
    },
  },
  baseHomePath: '/groups',
};
