import React from 'react';

import { DoubleContactor } from './DoubleContactor';
import { OneContactor } from './OneContactor';

interface IActionsProps {
  isEnableNight: boolean;
  oneContactor?: boolean;
  withOneLetter?: boolean;
  dontEnable?: boolean;
  dontDisable?: boolean;
}
export const Actions = ({ oneContactor, ...rest }: IActionsProps) => {
  if (oneContactor) {
    return <OneContactor {...rest} />;
  }
  return <DoubleContactor {...rest} />;
};
