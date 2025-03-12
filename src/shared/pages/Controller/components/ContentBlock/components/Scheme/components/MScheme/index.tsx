import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { MnemoScheme } from 'src/shared/ui';

export const MScheme = () => {
  return (
    <Wrapper>
      <MnemoScheme />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  overflow: scroll;
  display: flex;
  padding: 8px;
  justify-content: start;
  align-items: start;
  gap: 16px;
  border-radius: 16px;
  border: 1.334px dashed #71b8ff;
  background: #fff;
  width: 100%;
`;
