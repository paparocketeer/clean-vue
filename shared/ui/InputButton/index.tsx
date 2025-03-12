import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';

interface IInputButtonProps {
  handeAccept: (count: string) => void;
}

export const InputButton = ({ handeAccept }: IInputButtonProps) => {
  const [value, setValue] = useState<string>('');
  const handleAccept = () => {
    handeAccept(value);
    setValue('');
  };
  return (
    <Wrapper>
      <TextField
        inputMode={'numeric'}
        placeholder={'Номер страницы'}
        value={value}
        onChange={(e) => {
          const text = e.target.value;
          setValue(text);
        }}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            handleAccept();
          }
        }}
      />
      <SButton
        style={{
          height: '32px',
        }}
        variant={'contained'}
        onClick={handleAccept}>
        Перейти
      </SButton>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  user-select: none;
`;

const SButton = styled(Button)`
  border-radius: 0 100px 100px 0;
  border: 1px solid ${(p) => p.theme.palette.Accent.Primary};
  user-select: none;
`;

const TextField = styled('input')`
  user-select: none;
  display: flex;
  width: 205px;
  height: 32px;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  outline: none;
  border-radius: 100px 0 0 100px;
  border: 1px solid ${(p) => p.theme.palette.Accent.Primary};
  background: ${(p) => p.theme.palette.colors.White};
`;
