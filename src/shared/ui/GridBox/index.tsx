import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';

interface IInputGroupProps {
  children: React.ReactNode;
  columns?: string;
  rows?: string;
  gap?: string | number;
}

export const GridBox = ({ children, columns, gap, rows }: IInputGroupProps) => {
  return (
    <Wrapper
      sx={{
        gap: `${gap}px`,
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
      }}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: grid;
  width: 100%;
  height: 100%;
`;
