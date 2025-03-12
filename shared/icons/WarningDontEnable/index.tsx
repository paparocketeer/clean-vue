import React from 'react';

import { Large } from './Large';
import { Medium } from './Medium';
import { Small } from './Small';

type TSize = 'small' | 'medium' | 'large';

interface IWarningDontEnableProps {
  size: TSize;
}
export const WarningDontEnableIcon = ({
  size,
}: IWarningDontEnableProps): React.ReactElement<SVGElement> => {
  const icon: Record<TSize, React.ReactElement<SVGElement>> = {
    small: <Small />,
    medium: <Medium />,
    large: <Large />,
  };
  return icon[size];
};
