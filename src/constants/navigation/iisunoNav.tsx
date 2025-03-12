import { OperationIcon, RegistryIcon, ReportsIcon } from 'src/shared/icons';

import { PATHS } from '../paths';

export const iisunoNav: INavEl[] = [
  {
    text: 'Управление НО',
    path: PATHS.protected.iisuno.groups.index(),
    icon: <OperationIcon />,
  },
  {
    text: 'Реестры',
    path: PATHS.protected.iisuno.registry.index(),
    icon: <RegistryIcon />,
  },
  {
    text: 'Отчёты',
    path: PATHS.protected.iisuno.reports.index(),
    icon: <ReportsIcon />,
  },
];
