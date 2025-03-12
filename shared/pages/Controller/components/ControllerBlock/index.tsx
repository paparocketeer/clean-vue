import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';

import { Application, Control, IPInfo } from './components';

export const ControllerBlock = () => {
  return (
    <Wrapper>
      <Control />
      <IPInfo />
      <Application />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  width: 320px;
  flex-direction: column;
  gap: 8px;
`;
