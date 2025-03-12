import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react';
import { Typography } from 'src/shared/ui';

import { SItem } from '../Sitem';

interface ILItemProps {
  title: string;
  letterColor?: string;
  letter?: string;
  items: {
    left?: string;
    right?: string;
    value?: string;
    name: string;
    isDisabled: boolean;
  }[];
}
export const LItem = ({ title, letterColor, letter, items }: ILItemProps) => {
  return (
    <Wrapper>
      <PhaseTitle>
        <Typography
          bold
          variant={'title.large'}>
          {title}
        </Typography>
        {letter && <Title color={letterColor}>{letter}</Title>}
      </PhaseTitle>

      {items.map((el) => {
        return (
          <SItem
            withWrapper={false}
            key={el.name}
            left={el.left}
            right={el.right}
            value={el.value}
            isDisabled={el.isDisabled}
          />
        );
      })}
    </Wrapper>
  );
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

const Title = styled(Box)<{ color?: string }>`
  color: ${(p) => p.color};
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.32px;
`;

const Item = styled(Box)`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  border-radius: 100px;
  background: #e7f1ff;
`;

const PhaseTitle = styled(Box)`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: 100px;
  background: #e7f1ff;
  border: 1px solid #91bfff;
`;

const STextField = styled(TextField)`
  .MuiInputBase-root {
    border-radius: 100px;
    border: 1.334px dashed #5ea2ff;
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
  .MuiInputBase-input {
    padding: 8px;
    text-align: center;
  }
  .Mui-disabled {
    -webkit-text-fill-color: #000000;
  }
`;
