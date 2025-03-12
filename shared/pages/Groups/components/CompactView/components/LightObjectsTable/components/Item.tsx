import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { Typography } from 'src/shared/ui';

export const colorVariants = {
  green: '#6FCF97',
  gray: '#CDD0D4',
  red: '#F57474',
  white: '#ffffff',
};

export const iconColorVariants = {
  green: '#ffffff',
  gray: '#ffffff',
  red: '#ffffff',
  white: '#000000',
};

interface ItemProps {
  icon?: React.ReactNode;
  text: React.ReactNode;
  count?: string | number;
  variant: keyof typeof colorVariants;
}

export const Item = ({ icon, text, count, variant }: ItemProps) => {
  return (
    <Wrapper>
      <Inner>
        {icon && (
          <IconButtonWrapper
            style={{
              background: colorVariants[variant],
              color: iconColorVariants[variant],
            }}>
            {icon}
          </IconButtonWrapper>
        )}
        <Typography
          bold
          variant={'title.small'}>
          {text}
        </Typography>
      </Inner>
      <Typography
        bold
        variant={'title.small'}>
        {count}
      </Typography>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px 8px 12px;
  background: #ffffff;
  box-shadow: 0 0 0 1px #91bfff;
`;

const Inner = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 8px;
`;

const IconButtonWrapper = styled(IconButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  border-radius: 50px;
  width: 32px;
  height: 32px;
`;
