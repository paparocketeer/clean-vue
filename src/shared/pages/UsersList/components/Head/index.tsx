import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { tabVariantId, viewItems } from '../../constants';
import { Filters } from './components/Filters';
import { Setting } from './components/Setting';

export const Head = () => {
  const [getSearchParams] = useSearchParams();
  const tabVariant = getSearchParams.get(tabVariantId);

  if (tabVariant === viewItems[2].id) {
    return <></>;
  }
  return (
    <Wrapper>
      <Filters />
      <Setting />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  border-bottom: 1px solid ${(p) => p.theme.palette.Accent.Primary};
  padding: 10px;
`;
