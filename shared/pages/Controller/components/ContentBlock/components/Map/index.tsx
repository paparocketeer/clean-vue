import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { SearchBlock } from 'src/shared/ui';

export const Map = () => {
  return (
    <Wrapper>
      <SearchBlock showMap={true} />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 8px;
`;
