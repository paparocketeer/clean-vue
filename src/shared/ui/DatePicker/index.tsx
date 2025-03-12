import styled from '@emotion/styled';
import { InputLabel, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import { DatePickerProps } from '@mui/x-date-pickers/DatePicker/DatePicker.types';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import React from 'react';

import { ITypographyProps, Typography } from '../base/Typography';

export interface IDatePickerProps {
  label?: string;
  id?: string;
  datePickerProps?: DatePickerProps<any>;
  labelProps?: ITypographyProps;
  sx?: SxProps<Theme>;
  wrapperSx?: SxProps<Theme>;
}

export const DatePicker = ({ sx, label, labelProps, wrapperSx, id }: IDatePickerProps) => {
  return (
    <Wrapper sx={wrapperSx} className={'mui-input'}>
      <InputLabel id={id}>
        <Typography
          bold
          variant={'label.large'}
          {...labelProps}>
          {label}
        </Typography>
      </InputLabel>
      <DateTimePicker
        format={'DD/MM/YYYY HH:MM'}
        sx={{
          '.MuiPickersToolbar-root': {
            color: '#1565c0',
            borderRadius: '2px',
            borderWidth: '1px',
            borderColor: '#2196f3',
            border: 'none',
            backgroundColor: '#90caf9',
          },
          '.MuiOutlinedInput-notchedOutline': {
            display: 'none',
          },
          '.MuiInputBase-input': {
            padding: '0',
          },
          ...sx,
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;
