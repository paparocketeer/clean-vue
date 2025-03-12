import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { TContactorVariant } from 'src/shared/types/controlsNO';

interface ILineProps {
  variant: TContactorVariant;
}
export const Line = ({ variant }: ILineProps) => {
  const variantObj: Record<TContactorVariant, any> = {
    night: {
      point: {
        top: '-23px',
        left: '3px',
      },
      line: {
        left: '6.4px',
        top: '-17px',
      },
    },
    evening: {
      point: {
        top: '-47px',
        left: '3px',
      },
      line: {
        left: '6.4px',
        top: '-38px',
        height: '39px',
      },
    },
  };

  return (
    <>
      <Point style={variantObj[variant].point} />
      <BlackLine style={variantObj[variant].line} />
    </>
  );
};

const Point = styled(Box)`
  border-radius: 50%;
  top: -23px;
  left: 3px;
  position: absolute;
  height: 10px;
  width: 10px;
  background: #6b7c84;
`;

const BlackLine = styled(Box)`
  position: absolute;
  left: 6.4px;
  top: -17px;
  height: 27px;
  width: 3.1px;
  background: #6b7c84;
  z-index: 1;
`;
