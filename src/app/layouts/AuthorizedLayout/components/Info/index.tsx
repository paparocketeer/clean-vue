import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';

import { Breadcrumbs } from '../Breadcrumbs';
import { Date } from '../Date';

export const Info = () => {
  return (
    <Wrapper>
      <Breadcrumbs />
      <Date />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
`;
