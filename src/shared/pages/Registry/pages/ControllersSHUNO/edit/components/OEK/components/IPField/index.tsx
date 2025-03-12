import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import MuiInput from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import React from 'react';
import { Input, Typography } from 'src/shared/ui';

interface IIPFieldProps {
  count: number;
}
export const IPField = ({ count }: IIPFieldProps) => {
  return (
    <Wrapper>
      <Container>
        <Typography
          bold
          variant={'label.large'}>
          IP-адрес {count}
        </Typography>
        <Form>
          <SMuiInput
            inputProps={{
              maxLength: '3',
            }}
          />
          <Dot />
          <SMuiInput
            inputProps={{
              maxLength: '3',
            }}
          />
          <Dot />
          <SMuiInput
            inputProps={{
              maxLength: '3',
            }}
          />
          <Dot />
          <SMuiInput
            inputProps={{
              maxLength: '3',
            }}
          />
        </Form>
      </Container>
      <Container>
        <Typography
          bold
          variant={'label.large'}>
          Порт {count}
        </Typography>
        <Input
          sx={{
            width: '120px',
          }}
          inputProps={{
            placeholder: 'Порт',
          }}
        />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  align-items: end;
  gap: 16px;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled(Box)`
  width: 100%;
  display: flex;
  gap: 4px;
  align-items: end;
`;

const Form = styled(Box)`
  width: 202px;
  display: flex;
  gap: 4px;
  align-items: end;
`;

const Dot = styled(Box)`
  border-radius: 50px;
  background: #819099;
  width: 6px;
  height: 6px;
`;

const SMuiInput = styled(MuiInput)`
  display: flex;
  height: 36px;
  padding: 10px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 40px;
  color: #141518;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;
