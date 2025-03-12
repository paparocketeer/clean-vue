import { IMenuItem } from 'src/shared/ui/Menu/types';

import {
  LockIcon,
  SendMailIcon,
  TrashIcon,
  UserCircleIcon,
} from '../../../../icons';

export const userActionsListKeys = {
  'user-card': 'user-card',
  'send-repair-message': 'send-repair-message',
  'ban-user': 'ban-user',
  'delete-user': 'delete-user',
};

export const userActionsList: (
  isBanned: boolean
) => IMenuItem<keyof typeof userActionsListKeys>[] = (isBanned: boolean) => [
  {
    label: 'Карточка пользователя',
    icon: <UserCircleIcon />,
    id: 'user-card',
  },
  {
    label: isBanned
      ? 'Разблокировать пользователя'
      : 'Заблокировать пользователя',
    icon: <LockIcon />,
    id: 'ban-user',
  },
  {
    label: 'Удалить пользователя',
    icon: <TrashIcon />,
    id: 'delete-user',
  },
];
