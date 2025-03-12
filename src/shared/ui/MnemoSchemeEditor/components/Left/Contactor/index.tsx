import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system/styleFunctionSx';
import React from 'react';
import { OperationIcon, WarningIcon } from 'src/shared/icons';

import { IContactorProps, TContactorText, TPositionNumber } from './types';

export const Contactor = ({ number, text }: IContactorProps) => {
  const contactorText: Record<TContactorText, string> = {
    A: '#F2C94C',
    B: '#27AE60',
    C: '#EB5757',
  };
  const position: Record<TPositionNumber, SxProps<any>> = {
    '1': {
      left: '0px',
      top: '119px',
    },
    '2': {
      left: '40px',
      top: '119px',
    },
    '3': {
      left: '80px',
      top: '119px',
    },
    '4': {
      left: '132.5px',
      top: '119px',
    },
    '5': {
      left: '172.5px',
      top: '119px',
    },
    '6': {
      left: '211.6px',
      top: '119px',
    },
  };
  return (
    <Wrapper sx={position[number]}>
      <Text
        sx={{
          color: contactorText[text],
        }}>
        {text}
      </Text>
      <div
        style={{
          width: '24px',
          height: '24px',
        }}
      />
      <Circle>
        <OperationIcon
          width={13}
          height={13}
          color={'#ffffff'}
        />
      </Circle>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  position: absolute;
  display: flex;
  padding: 4px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 24px;
  border: 1px solid #71b8ff;
  background: #fff;
`;

const Text = styled(Box)`
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.24px;
`;

const Circle = styled(Box)`
  margin-top: 4px;
  border-radius: 277.913px;
  background: #B5B8BD;
  display: flex;
  padding: 3.333px;
  justify-content: center;
  align-items: center;
`;
