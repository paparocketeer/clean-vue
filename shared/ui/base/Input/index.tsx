import styled from '@emotion/styled';
import { InputLabel, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import MuiInput from '@mui/material/Input';
import { InputProps } from '@mui/material/Input/Input';
import { SxProps } from '@mui/system';
import React from 'react';

import { ITypographyProps, Typography } from '../Typography';

export interface IInputProps {
  label?: string;
  id?: string;
  inputProps?: InputProps;
  labelProps?: ITypographyProps;
  sx?: SxProps<Theme>;
  wrapperSx?: SxProps<Theme>;
}
export const Input = ({
  label,
  inputProps,
  labelProps,
  id,
  sx,
  wrapperSx,
}: IInputProps) => {
  return (
    <Wrapper
      className={'mui-input'}
      sx={wrapperSx}>
      <InputLabel id={id}>
        <Typography
          bold
          variant={'label.large'}
          {...labelProps}>
          {label}
        </Typography>
      </InputLabel>
      <MuiInput
        size={'small'}
        id={id}
        placeholder={'Введите текст'}
        {...inputProps}
        sx={sx}
      />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;

  justify-content: start;
  width: 100%;
  gap: 8px;
`;
