import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system/styleFunctionSx';
import React from 'react';

import { IVoltageProps, TPositionNumber } from './types';

export const Voltage = ({
  number,
  ampere = '0',
  volt = '0',
}: IVoltageProps) => {
  const position: Record<TPositionNumber, SxProps<any>> = {
    '1': {
      left: '17px',
      top: '399px',
    },
    '2': {
      left: '94px',
      top: '399px',
    },
    '3': {
      left: '169px',
      top: '399px',
    },
  };
  return (
    <Wrapper sx={position[number]}>
      <Item>
        <Text>I</Text>
        <Text>{ampere}A</Text>
      </Item>
      <Item>
        <Text>U</Text>
        <Text>{volt}B</Text>
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 60px;
  padding: 8px;
  align-items: center;
  justify-content: space-between;
  border-radius: 16.008px;
  border: 1px solid #71b8ff;
  text-align: center;
  height: 50px;
  background: #ffffff;
`;

const Item = styled(Box)`
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  align-items: center;
`;

const Text = styled(Box)`
  color: #000000;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.12px;
`;
