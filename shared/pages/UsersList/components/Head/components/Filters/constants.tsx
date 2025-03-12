import {
  CSVIcon,
  PDFIcon,
  PersonBlockIcon,
  PersonCloseIcon,
  PersonIcon,
  PersonTimeIcon,
  XMLIcon,
  XSLXIcon,
} from 'src/shared/icons';
import { IMenuItem } from 'src/shared/ui/Menu/types';

export const statusListKeys = {
  'active-users': 'active-users',
  'block-users': 'block-users',
  'time-block-users': 'time-block-users',
  'ban-users': 'ban-users',
};
export const statusListIcons = {
  'active-users': <PersonIcon />,
  'block-users': <PersonCloseIcon />,
  'time-block-users': <PersonTimeIcon />,
  'ban-users': <PersonBlockIcon />,
};
export const statusList: IMenuItem<keyof typeof statusListKeys>[] = [
  {
    label: 'Активные пользователи',
    icon: <PersonIcon />,
    id: 'active-users',
  },
  {
    label: 'Неактивные пользователи',
    icon: <PersonCloseIcon />,
    id: 'block-users',
  },
  {
    label: 'Временно заблокированные',
    icon: <PersonTimeIcon />,
    id: 'time-block-users',
  },
  {
    label: 'Прекращено действие',
    icon: <PersonBlockIcon />,
    id: 'ban-users',
  },
];

export const roleListKeys = {
  admin: 'admin',
  superuser: 'superuser',
  supervisor: 'supervisor',
  engineer: 'engineer',
  dispatcher: 'dispatcher',
  observer: 'observer',
};

export const roleList: IMenuItem<keyof typeof roleListKeys>[] = [
  {
    label: 'Администратор',
    id: 'admin',
  },
  {
    label: 'Суперпользователь',
    id: 'superuser',
  },
  {
    label: 'Руководитель',
    id: 'supervisor',
  },
  {
    label: 'Инженер',
    id: 'engineer',
  },
  {
    label: 'Диспетчер',
    id: 'dispatcher',
  },
  {
    label: 'Наблюдатель',
    id: 'observer',
  },
];

export const importExportListKeys = {
  'import-xslx': 'import-xslx',
  'import-xml': 'import-xml',
  'import-csv': 'import-csv',
  'importExportList-divider-1': 'importExportList-divider-1',
  'export-xslx': 'export-xslx',
  'export-pdf': 'export-pdf',
};
export const importExportList: IMenuItem<keyof typeof importExportListKeys>[] =
  [
    {
      label: 'Импорт из XSLX',
      icon: <XSLXIcon />,
      id: 'import-xslx',
    },
    {
      label: 'Импорт из XML',
      icon: <XMLIcon />,
      id: 'import-xml',
    },
    {
      label: 'Импорт из CSV ',
      icon: <CSVIcon />,
      id: 'import-csv',
    },
    {
      label: 'divider',
      id: 'importExportList-divider-1',
    },
    {
      label: 'Экспорт в XSLX',
      icon: <XSLXIcon />,
      id: 'export-xslx',
    },
    {
      label: 'Экспорт в PDF',
      icon: <PDFIcon />,
      id: 'export-pdf',
    },
  ];
