import React from 'react';

import { IControllerStatisticItem } from '../../../../../../../../../store/api/controllers/controllers.types';
import { DoubleContactor } from './DoubleContactor';
import { OneContactor } from './OneContactor';

interface IActionsProps extends IControllerStatisticItem {
  withOneLetter?: boolean;
}
export const Actions = (props: IActionsProps) => {
  if (props.contactor_amount === 1) {
    return <OneContactor {...props} />;
  }
  return <DoubleContactor {...props} />;
};
