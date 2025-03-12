import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { CircleCheckIcon, CircleCloseIcon } from 'src/shared/icons';

interface ICheckCellProps {
  status: boolean;
}
export const CheckCell = ({ status }: ICheckCellProps) => {
  if (status) {
    return (
      <Wrapper>
        <CircleCheckIcon />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <CircleCloseIcon />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
