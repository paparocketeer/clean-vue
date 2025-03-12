import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system/styleFunctionSx';
import React from 'react';

import { Fuse } from './Fuse';
import { IGroupProps, TPositionNumber } from './types';

const testData = new Array(17);
testData.fill(1, 1, 17);

export const Group = ({ number, baseLetter, schema }: IGroupProps) => {
  const position: Record<TPositionNumber, SxProps<any>> = {
    '1': {
      left: '321px',
      top: '86px',
    },
    '2': {
      left: '321px',
      top: '287px',
    },
    '3': {
      left: '321px',
      top: '489px ',
    },
  };

  return (
    <>
      <Wrapper sx={position[number]}>
        {schema.map((el, i) => {
          return (
            <Fuse
              key={`${i}${baseLetter}`}
              title={`${baseLetter}${i}`}
              subtitle={`${baseLetter}${i}`}
              variant={'editor'}
              contactorVariant={el.contactor}
            />
          );
        })}
      </Wrapper>
    </>
  );
};

const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  gap: 4px;
  position: absolute;
`;
