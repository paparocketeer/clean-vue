import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import MuiSelect, { SelectProps } from '@mui/material/Select';
import * as React from 'react';

import { PenIcon } from '../../../icons';
import { Typography } from '../Typography';
import { IMenuItem } from './types';

interface ISelectProps {
  id?: string;
  selectProps?: SelectProps;
  list?: IMenuItem[];
}
export const MinSelect = ({ id, selectProps, list }: ISelectProps) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <IconWrapper>
          <PenIcon color={'#0F74FF'} />
        </IconWrapper>
        <InnerLabel>
          <Typography
            color={'alert.alert-gray'}
            variant={'body.small'}>
            Вид
          </Typography>
        </InnerLabel>
        <SMinSelect
          id={id}
          sx={{ width: '100%' }}
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
        </SMinSelect>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const SMinSelect = styled(MuiSelect)`
  .MuiSelect-select {
    padding: 18px 0 1px 36px;
    border-radius: 16px;
    border: 1px solid #8ab8f8;
    background: #ffffff;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.25px;
  }
  .MuiInputBase-root {
    padding: 18px 0 1px 36px;
    border-radius: 16px;
    border: 1px solid #8ab8f8;
    background: #ffffff;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.25px;
  }
`;

const InnerWrapper = styled(Box)`
  width: 100%;
  display: flex;
  position: relative;
`;

const IconWrapper = styled(Box)`
  position: absolute;
  left: 11px;
  top: 7px;
  z-index: 1;
`;

const InnerLabel = styled(Box)`
  position: absolute;
  left: 37px;
  top: 3px;
  z-index: 1;
`;
