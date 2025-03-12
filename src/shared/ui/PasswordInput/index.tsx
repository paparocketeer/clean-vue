import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { generate } from 'generate-password';
import React, { useEffect } from 'react';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useNotification } from '../../hooks/useNotification';
import { getPasswordRules } from '../../store/slices/utils/validation';
import { ITextFieldProps, TextField } from '../base/TextField';
import { selectPasswordExample } from '../../store/selectors/utils';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useFormContext } from 'react-hook-form';

interface IPasswordInput extends ITextFieldProps {
  name: string;
  withGenerateButton?: boolean;
}
export const PasswordInput = ({
  withGenerateButton,
  name,
  ...inputProps
}: IPasswordInput) => {
  const { showNoty } = useNotification();
  const dispatch = useAppDispatch();
  const { setValue } = useFormContext();

  const passwordExample = useAppSelector(selectPasswordExample)

  useEffect(() => {
    setValue(name, passwordExample)
  }, [passwordExample]);

  if (!withGenerateButton) {
    return <TextField {...inputProps} />;
  }

  return (
    <Wrapper style={{ gridColumn: 'span 2' }}>
      <TextField
        {...inputProps}
        sx={{
          width: '100%',
        }}
        inputProps={{
          ...inputProps.inputProps,
        }}
      />
      <Button
        onClick={() => {
          dispatch(getPasswordRules());
          showNoty({
            variant: 'success',
            message: 'Пароль сгенерирован',
          });
        }}
        sx={{
          width: '190px',
          height: '39px',
        }}
        size={'small'}
        variant={'contained'}>
        Сгенерировать
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  width: 100%;
  align-items: end;
  display: flex;
  gap: 8px;
`;
