import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePath } from 'src/shared/hooks/usePath';
import { CheckCircleIcon, Icon1, Icon2, Icon3, Icon4 } from 'src/shared/icons';
import bgImage from 'src/shared/icons/auth/images/third.png';
import { Input, Typography } from 'src/shared/ui';

const RestorePassword = () => {
  const navigate = useNavigate();
  const path = usePath();

  return (
    <Wrapper
      sx={{
        background: `url(${bgImage})`,
      }}>
      <Header>
        <HeaderInner>
          <Icon1 />
          <Icon2 />
          <Icon3 />
          <Icon4 />
        </HeaderInner>
      </Header>
      <Content>
        <Title>
          <TitleTop>Добро пожаловать</TitleTop>
          <TitleBottom>в Подсистему Управления Наружным Освещением</TitleBottom>
        </Title>
        <Inner>
          <InnerTitle>Восстановление пароля</InnerTitle>

          <Form>
            <Input
              label={'Логин'}
              inputProps={{
                placeholder: 'Введите логин',
              }}
            />
            <Input
              label={'Код восстановления доступа'}
              inputProps={{
                placeholder: 'Введите код восстановления',
              }}
            />
            <Input
              label={'Новый пароль'}
              inputProps={{
                placeholder: 'Придумайте или сгенерируйте новый пароль',
              }}
            />
            <Input
              label={'Новый пароль повторно'}
              inputProps={{
                placeholder: 'Введите пароль повторно',
              }}
            />
          </Form>

          <LinkWrapper>
            <Typography
              bold
              onClick={() => {
                navigate(path.unAuthorizedPaths.faq.index());
              }}
              mode={'link'}>
              Требование к новому паролю
            </Typography>
            <Typography
              bold
              onClick={() => {
                navigate(path.unAuthorizedPaths.auth.index());
              }}
              mode={'link'}>
              Авторизация
            </Typography>
          </LinkWrapper>

          <Actions>
            <Button
              variant={'outlined'}
              sx={{ width: '165px' }}
              onClick={() => {
                navigate(path.unAuthorizedPaths.forgotPassword.index());
              }}
              size={'medium'}>
              Запросить код
            </Button>
            <Button
              variant={'contained'}
              sx={{ width: '165px' }}
              onClick={() => {
                navigate(path.unAuthorizedPaths.auth.index());
              }}
              size={'medium'}>
              Изменить
            </Button>
          </Actions>
        </Inner>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: 100%;
`;

const Header = styled(Box)`
  display: flex;
  height: 128px;
  width: 100%;
  padding-left: 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  background: #e6ecf2;
  position: absolute;
  left: 0;
  top: 0;
`;

const HeaderInner = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const Content = styled(Box)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 145px;
`;

const Title = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  margin-bottom: 40px;
`;

const TitleTop = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.15px;
  user-select: none;
`;

const TitleBottom = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.15px;
  user-select: none;
`;

const Inner = styled(Box)`
  display: flex;
  width: 480px;
  padding: 0px 24px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 24px;
  background: #fff;

  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);
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
  padding: 16px 0px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const LinkWrapper = styled(Box)`
  display: flex;
  padding: 8px 0px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  align-self: stretch;
`;

const InnerTitle = styled(Box)`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  color: #000;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 28.8px */
  letter-spacing: 0.6px;
  user-select: none;
`;
export default RestorePassword;
