import styled from '@emotion/styled';
import { InputLabel } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import MuiSelect, { SelectProps } from '@mui/material/Select';
import * as React from 'react';

import { Typography } from '../Typography';
import { IMenuItem } from './types';

interface ISelectProps {
  label?: string;
  id?: string;
  selectProps?: SelectProps;
  list?: IMenuItem[];
}
export const Select = ({ label, id, selectProps, list }: ISelectProps) => {
  return (
    <Wrapper className={'mui-select'}>
      <InputLabel id={id}>
        <Typography
          bold
          variant={'label.large'}>
          {label}
        </Typography>
      </InputLabel>
      <MuiSelect
        id={id}
        {...selectProps}>
        {list?.map((el) => {
          return (
            <MenuItem
              key={el.id}
              value={el.id}>
              {el.label}
            </MenuItem>
          );
        })}
      </MuiSelect>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;
