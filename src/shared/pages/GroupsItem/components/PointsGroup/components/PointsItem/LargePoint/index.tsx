import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';

import { Actions, Address, Head, Statuses } from './components';

interface IPointsItemProps {
  data: any;
}

export const LargePoint = ({ data }: IPointsItemProps) => {
  return (
    <Wrapper>
      <Head
        id={'1'}
        checked={false}
        title={'he-1345'}
        onCheck={() => {}}
        isLocked={true}
      />
      <Divider />
      <Actions
        withOneLetter={false}
        isEnableNight={true}
      />
      <Divider />
      <Address
        show={true}
        address={'Москва, Парк Победы, парк (11) (Насосная станция)'}
      />
      <Statuses withError={true} />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 222px;
  border-radius: 12px;
  box-shadow:
    0px -1px 4px 0px rgba(0, 0, 0, 0.03),
    0px 5px 12px 0px rgba(0, 30, 69, 0.08);
`;

const Divider = styled(Box)`
  height: 1px;
  width: 100%;
  background: #f2f2f2;
`;
