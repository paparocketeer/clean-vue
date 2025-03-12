import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react';
import { Typography } from 'src/shared/ui';

interface ISItemProps {
  left?: string;
  value?: string;
  right?: string;
  withWrapper?: boolean;
  isDisabled?: boolean;
}

export const SItem = ({
  right,
  left,
  value,
  isDisabled,
  withWrapper = true,
}: ISItemProps) => {
  const Component = (
    <Item>
      <Typography
        bold
        style={{
          minWidth: '44px',
          textAlign: 'end',
        }}
        variant={'title.medium'}>
        {left || ' '}
      </Typography>
      <STextField
        disabled={isDisabled}
        value={value}
        style={{
          minWidth: '110px',
        }}
        classes={{
          root: 'my-root',
        }}
      />
      <Typography
        bold
        style={{
          minWidth: '39px',
          textAlign: 'start',
        }}
        variant={'title.medium'}>
        {right || ' '}
      </Typography>
    </Item>
  );
  if (withWrapper) {
    return <Wrapper>{Component}</Wrapper>;
  }
  return Component;
};

const Wrapper = styled(Box)`
  border-radius: 16px;
  border: 1.334px dashed #5ea2ff;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
`;

const Item = styled(Box)`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-radius: 100px;
  background: #e7f1ff;
  border: 1px solid #91bfff;
`;

const STextField = styled(TextField)`
  .MuiInputBase-root {
    border-radius: 100px;
    background: #ffffff;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.4px;
    text-align: center;
    &.Mui-disabled {
      background: #b5d4ff;
    }
  }
  &.my-root {
    padding: 0 !important;
  }
  .MuiInputBase-input {
    padding: 8px;
    text-align: center;
  }
  .Mui-disabled {
    -webkit-text-fill-color: #000000;
  }
`;
