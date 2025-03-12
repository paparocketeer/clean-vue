import styled from '@emotion/styled';
import { Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { Typography } from 'src/shared/ui';

interface IAddressProps {
  address: string;
}
export const Address = ({ address }: IAddressProps) => {
  return (
    <Tooltip
      title={address.length >= 30 ? address : ''}
      placement='top'>
      <Wrapper>
        <Text variant={'caption.micro'}>{address}</Text>
      </Wrapper>
    </Tooltip>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  padding: 2px 4px;
  justify-content: center;
  align-items: flex-start;
  background: #ffffff;
  gap: 2px;
  align-self: stretch;
`;
const Text = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
