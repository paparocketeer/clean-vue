import { LockIcon, PenIcon, TrashIcon } from 'src/shared/icons';
import { IMenuItem } from 'src/shared/ui/Menu/types';

export const objectNORegistryActionsListKeys = {
  edit: 'edit',
  block: 'block',
  delete: 'delete',
};

export const objectNORegistryActionsList: (
  isBanned: boolean
) => IMenuItem<keyof typeof objectNORegistryActionsListKeys>[] = (
  isBanned: boolean
) => [
  {
    label: 'Редактировать',
    icon: <PenIcon />,
    id: 'edit',
  },
  {
    label: isBanned ? 'Разблокировать данные' : 'Заблокировать данные',
    icon: <LockIcon />,
    id: 'block',
  },
  {
    label: 'Удалить данные',
    icon: <TrashIcon />,
    id: 'delete',
  },
];
