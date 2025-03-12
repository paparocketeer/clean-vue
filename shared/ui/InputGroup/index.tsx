import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';

import { Typography } from '../base/Typography';

interface IInputGroupProps {
  title: string;
  children: React.ReactNode;
}

export const InputGroup = ({ children, title }: IInputGroupProps) => {
  return (
    <Wrapper>
      <Typography
        variant={'title.large'}
        bold>
        {title}
      </Typography>
      <Inner>{children}</Inner>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 100%;
`;

const Inner = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
