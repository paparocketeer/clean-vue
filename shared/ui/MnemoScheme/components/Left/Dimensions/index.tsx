import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system/styleFunctionSx';
import React from 'react';
import { AutomaticIcon } from 'src/shared/icons';

import { IDimensionsProps, TDimensionsColor, TPositionNumber } from './types';

export const Dimensions = ({ color, number, title }: IDimensionsProps) => {
  const dimensionsColor: Record<TDimensionsColor, string> = {
    red: '#27AE60',
    green: '#EB5757',
  };
  const position: Record<TPositionNumber, SxProps<any>> = {
    '1': {
      left: '0px',
      top: '222px',
    },
    '2': {
      left: '134.5px',
      top: '222px',
    },
  };

  return (
    <Wrapper sx={position[number]}>
      <StatusWrapper
        sx={{
          background: dimensionsColor[color],
        }}>
        <AutomaticIcon
          width={14}
          height={14}
          color={'#ffffff'}
        />
        <Text>Автономный</Text>
      </StatusWrapper>
      <Circle
        sx={{
          background: dimensionsColor[color],
        }}
      />
      <Title>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  position: absolute;

  border-radius: 15.03px;
  border: 1px solid #71b8ff;
  background: #fff;

  display: flex;
  height: 116px;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

const StatusWrapper = styled(Box)`
  display: flex;
  height: 24px;
  padding: 3.6px 7.197px;
  justify-content: center;
  align-items: center;
  gap: 3.6px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 60px;
`;

const Text = styled(Box)`
  color: #ffffff;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.1px;
`;

const Circle = styled(Box)`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const Title = styled(Box)`
  color: #000;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.14px;
`;
