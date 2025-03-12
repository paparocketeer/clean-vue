import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { IpLevel } from 'src/shared/icons';
import { Typography } from 'src/shared/ui';

export const IPInfo = () => {
  return (
    <Wrapper>
      <Typography variant={'body.small'}>ip адреса:</Typography>
      <Inner>
        <Item>
          <Typography
            bold
            color={'alert.alert-green'}
            variant={'body.large'}>
            10.155.2.90:4841
          </Typography>
          <IpLevel variant={'green'} />
        </Item>
        <Item>
          <Typography
            bold
            color={'alert.alert-red'}
            variant={'body.large'}>
            10.155.2.90:4841
          </Typography>
          <IpLevel variant={'red'} />
        </Item>
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  background: #ffffff;
  border-radius: 24px;
  width: 320px;
  justify-content: space-between;
`;

const Inner = styled(Box)`
  display: flex;
  gap: 2px;
  align-items: start;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

const Item = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Left = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Right = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TextWrapper = styled(Box)`
  height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
`;
