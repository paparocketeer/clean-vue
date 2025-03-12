import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from 'src/shared/ui';

import { usePath } from '../../../../../../../hooks/usePath';

export const colorVariants = {
  green: '#6FCF97',
  gray: '#CDD0D4',
  red: '#F57474',
};

interface ItemProps {
  icon: React.ReactNode;
  text: React.ReactNode;
  count: string | number;
  variant: keyof typeof colorVariants;
  filter: string;
}

export const Item = ({ icon, text, count, variant, filter }: ItemProps) => {
  const path = usePath();
  const navigate = useNavigate();

  return (
    <Wrapper
      onClick={() => {
        navigate(path.protectedPaths.iisuno.groups.groupItem(filter));
      }}
      style={{
        background: colorVariants[variant],
      }}>
      <Inner>
        <IconButtonWrapper>{icon}</IconButtonWrapper>
        <Typography
          variant={'title.medium'}
          bold>
          {text}
        </Typography>
      </Inner>
      <CWrapper>
        <Typography
          variant={'title.large'}
          bold>
          {count}
        </Typography>
      </CWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-radius: 100px;
  padding: 12px 24px;
  cursor: pointer;
  box-shadow:
    0px -1px 4px 0px rgba(0, 0, 0, 0.03),
    0px 5px 12px 0px rgba(0, 30, 69, 0.08);
`;

const Inner = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 10px;
`;

const IconButtonWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  color: #000000;
  border-radius: 50px;
  min-width: 40px;
  min-height: 40px;
`;

const CWrapper = styled(Box)`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  color: #000000;
  border-radius: 100px;
  padding: 8px;
  height: 40px;
  min-width: 40px;
  width: 100%;
  max-width: fit-content;
  overflow: hidden;
`;
