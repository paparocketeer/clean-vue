import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system/styleFunctionSx';
import React from 'react';

import { ILetterProps, TLetterColors, TPositionNumber } from './types';

export const Letter = ({ text, number }: ILetterProps) => {
  const position: Record<TPositionNumber, SxProps<any>> = {
    '1': {
      left: '18px',
      top: '544px',
    },
    '2': {
      left: '93.4px',
      top: '544px',
    },
    '3': {
      left: '167.4px',
      top: '544px',
    },
  };
  const colors: Record<TLetterColors, string> = {
    A: '#F2C94C',
    B: '#27AE60',
    C: '#EB5757',
  };
  return (
    <Wrapper sx={{ color: colors[text], ...position[number] }}>{text}</Wrapper>
  );
};

const Wrapper = styled(Box)`
  position: absolute;
  border-radius: 100px;
  border: 1px solid #71b8ff;
  background: #fff;
  display: flex;
  width: 60px;
  height: 60px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.4px;
`;
