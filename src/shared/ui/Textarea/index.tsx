import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import { TextFieldProps } from '@mui/material/TextField/TextField';
import React from 'react';

export const TextArea = ({ ...props }: TextFieldProps) => {
  return (
    <STextField
      rows={4}
      multiline
      {...props}
    />
  );
};

const STextField = styled(TextField)`
  padding: 16px;
  background: rgba(231, 241, 255, 0.5);
  display: flex;
  color: #bdbdbd;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */

  border-radius: 16px;
  border: 1px solid
    ${(p) =>
      p.theme.palette.Palette['palette-primary-blue'][
        'palette-primary-blue-200'
      ]};
  background: ${(p) => p.theme.palette.colors.White};

  .MuiInputBase-input {
    border: none;
  }
  fieldset {
    display: none;
  }
`;
