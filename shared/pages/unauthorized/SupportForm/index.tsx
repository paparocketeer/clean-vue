import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon4 } from 'src/shared/icons';
import { Input, Select, Typography } from 'src/shared/ui';

import { usePath } from '../../../hooks/usePath';

const themeList = [
  {
    id: '0',
    label: 'Общая тема обращения',
  },
  {
    id: '1',
    label: 'Восстановление доступа к системе',
  },
  {
    id: '3',
    label: 'Ошибки во время работы ИИУСНО',
  },
  {
    id: '4',
    label: 'Предложение по улучшению системы',
  },
];

const SupportForm = () => {
  const navigate = useNavigate();
  const path = usePath();

  return (
    <Wrapper>
      <Left>
        <Icon4 />
        <TitleWrapper>
          <Typography variant={'display.small'}>
            Обращение в поддержку ИИУСНО
          </Typography>
          <Typography variant={'title.medium'}>
            Восстановление доступа к системе, разрешение проблем, <br />
            предложения для улучшения работы системы
          </Typography>
        </TitleWrapper>
        <FooterWrapper>
          <FooterInner>
            <Typography variant={'title.medium'}>
              Инструкция для входа:
            </Typography>
            <Typography
              variant={'title.medium'}
              color={'Accent.Primary'}>
              Сотрудникам ИИУСНО
            </Typography>
          </FooterInner>
          <FooterInfo>
            <Typography variant={'title.medium'}>© ИИУСНО 2024</Typography>
            <Typography variant={'title.medium'}>
              Поддержка: +7 (999) 777-77-77, support@iiusno.ru
            </Typography>
          </FooterInfo>
        </FooterWrapper>
      </Left>
      <Right>
        <InnerRight>
          <Title>
            <Typography
              variant={'title.large'}
              bold>
              Создание обращения
            </Typography>
          </Title>
          <Form>
            <Input
              label={'ФИО'}
              inputProps={{
                placeholder: 'Введите вашу Фамилию, Имя и Отчество',
                id: 'fio',
              }}
            />
            <Input
              label={'Логин'}
              inputProps={{
                placeholder: 'Введите логин ИИУСНО',
                id: 'login',
              }}
            />
            <Input
              label={'Электронная почта'}
              inputProps={{
                placeholder:
                  'Введите электронную почту, которой пользуетесь в ИИУСНО',
                id: 'mail',
              }}
            />
            <Select
              id={'theme'}
              list={themeList}
              label={'Тема обращения'}
              selectProps={{
                placeholder: 'Выберите тему обращение или напишите свою',
              }}
            />
            <Input
              label={'Обращение'}
              inputProps={{
                placeholder: 'Введите текст обращения',
                rows: 5,
                id: 'standard-multiline-static',
                multiline: true,
              }}
            />
          </Form>
          <Actions>
            <Button
              sx={{ width: '165px' }}
              onClick={() => {
                navigate(path.unAuthorizedPaths.welcome.index());
              }}
              size={'medium'}
              variant={'outlined'}>
              Отмена
            </Button>
            <Button
              sx={{ width: '165px' }}
              size={'medium'}
              variant={'contained'}>
              Отправить
            </Button>
          </Actions>
        </InnerRight>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled(Box)`
  display: flex;
  padding: 64px 64px 32px 64px;
  flex-direction: column;
  width: 56%;
  height: 100%;
  align-items: start;
  gap: 32px;
  background: #e6ecf2;
`;

const TitleWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: auto;
  gap: 16px;
`;
const FooterWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 48px;
`;

const FooterInner = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;
const FooterInfo = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

const Right = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 54px;
  background: #fff;
  align-items: center;
  justify-content: center;
`;

const InnerRight = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 680px;
  padding: 0px 24px;
  flex-direction: column;

  border-radius: 24px;
  background: #fff;

  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);
`;

const Title = styled(Box)`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  width: 100%;
`;

const Form = styled(Box)`
  display: flex;
  padding: 16px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

const Actions = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
`;

export default SupportForm;
