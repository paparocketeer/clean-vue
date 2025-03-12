import { ReactElement } from 'react';

export interface ITabsProps {
  items: {
    label?: string | ReactElement;
    id: string;
    icon?: ReactElement;
  }[];
  name: string;
  onChange?: (id: string, search?: string) => void;
}
