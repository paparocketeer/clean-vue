import React from 'react';
import { IControllerStatisticRes } from 'src/shared/store/api/controllers/controllers.types';

import { Default } from './Default';
import { WithError } from './WithError';

interface IStatusesProps {
  withError: boolean;
  statuses: IControllerStatisticRes['items'][number];
}
export const Statuses = ({ withError, statuses }: IStatusesProps) => {
  if (withError) {
    return <WithError {...statuses} />;
  }
  return <Default {...statuses} />;
};
