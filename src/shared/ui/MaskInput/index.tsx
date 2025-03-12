import styled from '@emotion/styled';
import { InputLabel, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import TextFieldMui from '@mui/material/TextField';
import { TextFieldProps } from '@mui/material/TextField/TextField';
import { SxProps } from '@mui/system';
import React from 'react';
import InputMask from 'react-input-mask';

import { ITypographyProps, Typography } from '../base/Typography';
import { maskVariants, TMaskTypes } from './masks';

export interface IMaskInputProps extends Omit<TextFieldProps, 'variant'> {
  mask: TMaskTypes;
  setText?: (text: string) => void;
  text?: string;
  label?: string;
  id?: string;
  labelProps?: ITypographyProps;
  wrapperSx?: SxProps<Theme>;
}

export const MaskInput = ({
  label,
  labelProps,
  id,
  wrapperSx,
  mask,
  error,
  helperText,
  disabled,
  onChange,
}: IMaskInputProps) => {
  const [text, setText] = React.useState('');

  const beforeMaskedValueChange = (newState, _, userInput) => {
    let { value } = newState;
    let selection = newState.selection;
    let cursorPosition = selection ? selection.start : null;

    if (value.endsWith('-') && userInput !== '-' && !value.endsWith('-')) {
      if (cursorPosition === value.length) {
        cursorPosition--;
        selection = { start: cursorPosition, end: cursorPosition };
      }
      value = value.slice(0, -1);
    }

    return {
      value,
      selection,
    };
  };

  const handleChange = (event) => {
    setText(event.target.value);
    onChange?.(event);
  };

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
      {disabled ? (
        <TextFieldMui
          value={text}
          disabled={true}
        />
      ) : (
        <InputMask
          mask={maskVariants[mask]}
          maskChar={null}
          value={text}
          onChange={handleChange}
          inputProps={{
            helperText,
            error,
          }}
          beforeMaskedValueChange={beforeMaskedValueChange}>
          {({ inputProps }) => <TextFieldMui {...inputProps} />}
        </InputMask>
      )}
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
