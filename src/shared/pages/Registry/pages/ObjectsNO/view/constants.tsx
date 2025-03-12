import { ITabsProps } from '../../../../../ui/Tabs/types';
import { Card2Icon, Card3Icon, CardIcon } from '../../../../../icons';
import React from 'react';

export const objectNoRegistryPagination = 'object-no-registry-pagination';
export const tabVariantObjectNoId = 'tab_variant_object_no_id';
export const tabVariantObjectNoItems: ITabsProps['items'] = [
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
