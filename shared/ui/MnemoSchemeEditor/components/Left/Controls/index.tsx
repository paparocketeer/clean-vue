import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';

import { Item } from './components/Item';

export const Controls = () => {
  return (
    <>
      <Wrapper />
      <Inner>
        <Item
          text={'Линия 1'}
          variant={'control'}
        />
        <Item
          text={'Откл'}
          variant={'power'}
        />
        <Item
          text={'Линия 2'}
          variant={'control'}
        />
      </Inner>
    </>
  );
};

const Inner = styled(Box)`
  position: absolute;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  width: 240px;
  height: 60px;
  top: 647px;
  overflow: hidden;
  left: 6px;
`;

const Wrapper = styled(Box)`
  left: 5px;
  top: 647px;
  position: absolute;
  display: flex;
  width: 242.25px;
  height: 60.8px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 15.2px;
  border: 0.95px solid #71b8ff;
  background: #fff;
`;
