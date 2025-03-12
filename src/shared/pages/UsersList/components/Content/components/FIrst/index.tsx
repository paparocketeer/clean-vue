import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';

import { Item } from './components';

export const First = () => {
  return (
    <Wrapper>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 10px;
  overflow: scroll;
`;
