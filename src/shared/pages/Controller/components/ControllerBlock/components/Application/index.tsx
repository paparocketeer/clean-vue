import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react';
import { FileSelect, Input, MinSelect } from 'src/shared/ui';

export const Application = () => {
  return (
    <Wrapper>
      <MinSelect
        id={'support-request'}
        list={[
          {
            label: 'Заявка',
            id: '0',
          },
          {
            label: 'Жалоба',
            id: '1',
          },
          {
            label: 'Просьба',
            id: '2',
          },
        ]}
      />
      <Input
        label={'Текст заявки'}
        inputProps={{
          placeholder: 'Напишите текст заявки...',
          rows: 4,
          id: 'standard-multiline-static',
          multiline: true,
        }}
      />
      <FileSelect />
      <SubmitWrapper>
        <Button
          sx={{
            width: '120px',
          }}
          size={'small'}
          variant={'contained'}>
          Отправить
        </Button>
      </SubmitWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background: #ffffff;
  width: 320px;
  padding: 16px;
  gap: 16px;
`;

const STextField = styled(TextField)`
  .MuiInputBase-root {
    border-radius: 16px;
    display: flex;
    height: 146px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
  }
`;

const SubmitWrapper = styled(Box)`
  margin-top: 8px;
  display: flex;
  align-items: end;
  justify-content: end;
`;
