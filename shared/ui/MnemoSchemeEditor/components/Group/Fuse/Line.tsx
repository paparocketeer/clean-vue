import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { TContactorVariant } from 'src/shared/types/controlsNO';

import { TContactorType } from '../../../../../types/menmoscheme';

interface ILineProps {
  variant: TContactorType;
}

export const Line = ({ variant }: ILineProps) => {
  if (variant === 'unused') {
    return <></>;
  }
  return (
    <Wrapper variant={variant}>{variant === 'night' ? Night : Evening}</Wrapper>
  );
};

const Wrapper = styled(Box)<ILineProps>`
  top: ${(p) => (p.variant === 'night' ? '-23px' : '-47px')};
  left: 3px;
  position: absolute;
`;

const Night = (
  <svg
    width='10'
    height='36'
    viewBox='0 0 10 36'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <circle
      cx='5'
      cy='5.07373'
      r='5'
      fill='#6B7C84'
    />
    <path
      d='M5 24.0757L5 10.0757'
      stroke='#6B7C84'
      strokeWidth='3'
      strokeLinecap='square'
    />
    <path
      d='M3.5 25.0757H6.5V34.4935C6.5 35.322 5.82843 35.9935 5 35.9935C4.17157 35.9935 3.5 35.322 3.5 34.4935V25.0757Z'
      fill='#6B7C84'
    />
  </svg>
);
const Evening = (
  <svg
    width='10'
    height='59'
    viewBox='0 0 10 59'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <circle
      cx='5'
      cy='5.07397'
      r='5'
      fill='#6B7C84'
    />
    <path
      d='M5 47.9999L5 10.0759'
      stroke='#6B7C84'
      strokeWidth='3'
      strokeLinecap='square'
    />
    <path
      d='M3.5 48H6.5V57.4177C6.5 58.2461 5.82843 58.9177 5 58.9177C4.17157 58.9177 3.5 58.2461 3.5 57.4177V48Z'
      fill='#6B7C84'
    />
  </svg>
);
