import styled from '@emotion/styled';
import { InputLabel, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import TextFieldMui, { TextFieldProps } from '@mui/material/TextField';
import { SxProps } from '@mui/system';
import React from 'react';

import { ITypographyProps, Typography } from '../Typography';

export interface ITextFieldProps {
  label?: string;
  id?: string;
  inputProps?: TextFieldProps;
  labelProps?: ITypographyProps;
  sx?: SxProps<Theme>;
  wrapperSx?: SxProps<Theme>;
}
export const TextField = ({
  label,
  inputProps,
  labelProps,
  id,
  sx,
  wrapperSx,
}: ITextFieldProps) => {
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
      <TextFieldMui
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
  justify-content: space-between;
  width: 100%;
  gap: 8px;
`;
