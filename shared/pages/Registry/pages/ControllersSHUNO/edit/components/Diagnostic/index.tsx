import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { Typography } from 'src/shared/ui';

export const Diagnostic = () => {
  return (
    <Wrapper>
      <Top>
        <SButton
          sx={{
            '&:hover': {
              background: '#0d7d3c',
            },
          }}>
          Выполнить диагностику
        </SButton>
      </Top>
      <Bottom>
        <Bottom>
          <Typography
            variant={'title.medium'}
            bold>
            Результат диагностики:
          </Typography>
        </Bottom>
        <Content></Content>
      </Bottom>
      <Actions>
        <Button
          size={'medium'}
          variant={'outlined'}>
          Отмена
        </Button>
        <Button
          size={'medium'}
          variant={'contained'}>
          Сохранить
        </Button>
      </Actions>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled(Box)`
  border-radius: 12px;
  background: #f3f8ff;
  display: flex;
  padding: 12px 16px;
  align-items: start;
  height: 300px;
  text-align: start;
`;

const Top = styled(Box)`
  width: 100%;
  display: flex;
  padding: 12px 0;
  align-items: center;
  align-self: stretch;
`;

const Bottom = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SButton = styled(Button)`
  background: #27ae60;
  padding: 7px 32px;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  border-radius: 30px;
  text-transform: none;
  line-height: normal;
`;

const Actions = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  align-self: stretch;
`;
