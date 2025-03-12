import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';

import { Typography } from '../base/Typography';

interface IInputGroupProps {
  label: string;
}

export const SmallTable = ({ label }: IInputGroupProps) => {
  return (
    <Wrapper>
      <Box>
        <Typography
          variant={'caption.large'}
          bold>
          {label}
        </Typography>
      </Box>
      <Inner>
        <InnerWrapper>
          <TitleItem>
            <Typography
              variant={'caption.medium'}
              bold>
              Номер
            </Typography>
          </TitleItem>
          <Item>933</Item>
          <Item>933</Item>
          <Item>933</Item>
          <Item>933</Item>
          <Item>933</Item>
        </InnerWrapper>
        <InnerWrapper>
          <TitleItem>
            <Typography
              variant={'caption.medium'}
              bold>
              № Документа
            </Typography>
          </TitleItem>
          <Item>933</Item>
          <Item>933</Item>
          <Item>933</Item>
          <Item>933</Item>
          <Item>933</Item>
        </InnerWrapper>
        <InnerWrapper>
          <TitleItem>
            <Typography
              variant={'caption.medium'}
              bold>
              Дата
            </Typography>
          </TitleItem>
          <Item>933</Item>
          <Item>933</Item>
          <Item>933</Item>
          <Item>933</Item>
          <Item>933</Item>
        </InnerWrapper>
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 8px;
`;

const Inner = styled(Box)`
  display: flex;
  gap: 4px;
  width: 100%;
`;

const InnerWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const TitleItem = styled(Box)`
  display: flex;
  height: 32px;
  padding: 4px 8px;
  align-items: center;

  border-radius: 10px;
  background: #e7f1ff;
`;

const Item = styled(Box)`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background: #f3f8ff;
`;
