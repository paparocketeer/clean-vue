import styled from '@emotion/styled';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import React from 'react';

import { FileIcon } from '../../icons';

export const FileSelect = () => {
  return (
    <SOutlinedInput
      endAdornment={
        <InputAdornment position='end'>
          <FileIcon color={'#0F74FF'} />
        </InputAdornment>
      }
      placeholder={'Выберите файл'}
      type={'file'}
    />
  );
};

const SOutlinedInput = styled(OutlinedInput)`
  padding: 8px 16px;
  width: fit-content;
  border-radius: 16px;
  border: 1px solid #91bfff;
  background: #ffffff;
  height: 32px;
  .MuiInputBase-input {
    cursor: pointer;
  }
  ::before {
    content: 'Прикрепить файл';
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.12px;
  }
`;
