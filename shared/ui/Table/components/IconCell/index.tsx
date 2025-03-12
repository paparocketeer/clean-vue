import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React, { ReactNode } from 'react';

interface IIconCellProps {
  children: ReactNode;
}

export const IconCell = ({ children }: IIconCellProps) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
