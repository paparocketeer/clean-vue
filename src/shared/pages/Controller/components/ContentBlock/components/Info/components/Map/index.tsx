import styled from '@emotion/styled';
import { Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useAppSelector } from 'src/shared/hooks/useAppSelector';
import { GeoMapIcon, MapPointIcon } from 'src/shared/icons';
import { selectController } from 'src/shared/store/selectors/controller';
import { Typography } from 'src/shared/ui';

export const Map = () => {
  const controllerData = useAppSelector((state) => selectController(state));

  return (
    <Wrapper>
      <Inner>
        <MapPointIcon
          style={{
            minWidth: '40px',
            minHeight: '40px',
          }}
        />
        <Tooltip title={controllerData.address}>
          <Location variant={'body.medium'}>{controllerData.address}</Location>
        </Tooltip>
      </Inner>
      <GeoMapIcon />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  width: 100%;
  border-radius: 24px;
  background: #ffffff;
  padding: 12px 16px;
  justify-content: space-between;
  gap: 8px;
`;

const Inner = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Location = styled(Typography)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
