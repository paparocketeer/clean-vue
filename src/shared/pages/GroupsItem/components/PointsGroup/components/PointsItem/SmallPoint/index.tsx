import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { IControllerStatisticRes } from 'src/shared/store/api/controllers/controllers.types';
import { hasPPError } from 'src/shared/utils/hasPPError';
import { WithContent } from 'src/shared/utils/WithContent';

import { Actions, Address, Head, Statuses } from './components';

interface IPointsItemProps {
  data: IControllerStatisticRes['items'][number];
  pointsIds: Record<string, IControllerStatisticRes['items'][number]>;
  groupId?: string | number;
  withOneLetter: boolean;
  withAddresses: boolean;
}

export const SmallPoint = ({
  data,
  withOneLetter,
  withAddresses,
  pointsIds,
  groupId,
}: IPointsItemProps) => {
  return (
    <Wrapper>
      <Head
        groupId={groupId}
        checked={!!pointsIds?.[data.id]}
        {...data}
      />
      <Divider />
      <Actions
        withOneLetter={withOneLetter}
        {...data}
      />
      <WithContent isShow={!withAddresses}>
        <Divider />
        <Address address={data.address} />
      </WithContent>
      <Statuses
        statuses={data}
        withError={hasPPError(data)}
      />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 110px;
  border-radius: 12px;
  box-shadow:
    0 -1px 4px 0 rgba(0, 0, 0, 0.03),
    0 5px 12px 0 rgba(0, 30, 69, 0.08);
`;

const Divider = styled(Box)`
  height: 1px;
  width: 100%;
  background: #f2f2f2;
`;
