import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';

import { Group } from './components/Group';
import { Left } from './components/Left';
import bg from './mnemoSkelet.svg';

export const MnemoScheme = () => {
  return (
    <Wrapper>
      <Left />
      <Group
        baseLetter={'A'}
        number={'1'}
      />
      <Group
        baseLetter={'B'}
        number={'2'}
      />
      <Group
        baseLetter={'C'}
        number={'3'}
      />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  position: relative;
  width: 1130px;
  height: 711px;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 16px;
`;
