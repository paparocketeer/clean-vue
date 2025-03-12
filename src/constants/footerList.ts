import { IMenuItem } from '../shared/ui/base/Select/types';

export const footerList: IMenuItem[] = [
  {
    label: '10 стр.',
    id: '10',
  },
  {
    label: '20 стр.',
    id: '20',
  },
  {
    label: '50 стр.',
    id: '50',
  },
  {
    label: '100 стр.',
    id: '100',
  },
  {
    label: '250 стр.',
    id: '3250',
  },
  {
    label: '500 стр.',
    id: '500',
  },
];

export const defaultFooterCount = footerList[0].id;
