import styled from '@emotion/styled';
import { Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { MiniMapPointIcon } from 'src/shared/icons';
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
        <MapIconWrapper>
          <MiniMapPointIcon
            width={12}
            height={12}
          />
        </MapIconWrapper>
        <Text variant={'caption.micro'}>{address}</Text>
      </Wrapper>
    </Tooltip>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  padding: 5.5px 8px;
  min-height: 30px;
  justify-content: start;
  align-items: flex-start;
  gap: 4px;
  background: #ffffff;
  align-self: stretch;
`;

const Text = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const MapIconWrapper = styled(Box)`
  display: flex;
  align-items: start;
  justify-content: center;
`;
