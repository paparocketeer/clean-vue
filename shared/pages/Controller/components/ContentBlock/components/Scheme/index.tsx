import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { PPStatusList } from 'src/shared/ui';

import { MScheme } from './components';

export const Scheme = () => {
  return (
    <Wrapper>
      <PPStatusList
        lights={'active'}
        outgoingLines={'inactive'}
        accident={'active'}
        connect={'inactive'}
        fire={'broken'}
        inputAccident={'active'}
        openDoorPP={'inactive'}
        openDoorSHUNO={'broken'}
      />
      <MScheme />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  padding: 8px 16px 16px 16px;
  height: 100%;
  gap: 12px;
  border-radius: 24px;
  background: #ffffff;
`;
