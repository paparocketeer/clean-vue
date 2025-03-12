import React from 'react';

import { Card2Icon, Card3Icon, CardIcon } from '../../icons';
import { ITabsProps } from '../../ui/Tabs/types';

export const tabVariantId = 'tabVariant';
export const paginationId = 'utils-users';

export const viewItems: ITabsProps['items'] = [
  {
    id: '1',
    label: <CardIcon />,
  },
  {
    id: '2',
    label: <Card2Icon />,
  },
  {
    id: '3',
    label: <Card3Icon />,
  },
];
