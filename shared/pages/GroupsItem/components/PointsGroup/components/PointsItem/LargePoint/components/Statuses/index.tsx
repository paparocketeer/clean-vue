import React from 'react';

import { Default } from './Default';
import { WithError } from './WithError';

interface IStatusesProps {
  withError: boolean;
}
export const Statuses = ({ withError }: IStatusesProps) => {
  const data = {
    inputAccident: false,
    connected: false,
    closedDoor: false,
    fire: false,
    outLines: false,
    lamp: false,
    closedDDoor: false,
    accident: false,
  };

  if (withError) {
    return <WithError {...data} />;
  }
  return <Default {...data} />;
};
