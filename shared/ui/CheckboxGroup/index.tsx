import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import React, { ReactNode } from 'react';

interface ICheckBoxGroupProps {
  label: string | ReactNode;
  values: {
    text: string;
    id: string;
    value: boolean;
  }[];
}
export const CheckBoxGroup = ({ values, label }: ICheckBoxGroupProps) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Inner>
        {values.map((el) => {
          return (
            <FormControlLabel
              key={el.id}
              value='end'
              control={<Checkbox checked={el.value} />}
              label={el.text}
              labelPlacement='end'
            />
          );
        })}
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled(Box)`
  width: 100%;
  display: flex;
`;

const Inner = styled(Box)`
  width: 100%;
  display: flex;
`;
