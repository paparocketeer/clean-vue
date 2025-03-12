import React from 'react';

import { DoubleContactor } from './DoubleContactor';
import { OneContactor } from './OneContactor';
import { IControllerStatisticItem } from '../../../../../../../../../store/api/controllers/controllers.types';

interface IActionsProps extends IControllerStatisticItem{
  withOneLetter?: boolean;
}
export const Actions = (props: IActionsProps) => {
  if (props.contactor_amount === 1) {
    return <OneContactor {...props} />;
  }
  return <DoubleContactor {...props} />;
};
