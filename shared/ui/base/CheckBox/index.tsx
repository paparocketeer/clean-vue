import styled from '@emotion/styled';
import MuiCheckbox from '@mui/material/Checkbox';
import { CheckboxProps } from '@mui/material/Checkbox/Checkbox';
import React, { ReactNode, useId } from 'react';

import { ICheckedItem } from '../../Menu/types';

interface ICheckboxProps {
  label?: string | ReactNode;
  checkboxProps?: CheckboxProps;
}

export const Checkbox = ({ checkboxProps, label }: ICheckboxProps) => {
  const id = useId();
  return (
    <Wrapper htmlFor={id}>
      <MuiCheckbox
        id={id}
        sx={{ padding: '4px' }}
        size={'small'}
        {...checkboxProps}
      />
      {label}
    </Wrapper>
  );
};

const Wrapper = styled('label')`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 4px;
`;
