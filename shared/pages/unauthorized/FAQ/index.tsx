import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePath } from 'src/shared/hooks/usePath';
import { CheckCircleIcon, Icon1, Icon2, Icon3, Icon4 } from 'src/shared/icons';
import bgImage from 'src/shared/icons/auth/images/third.png';
import { Typography } from 'src/shared/ui';

const FAQ = () => {
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
          <InnerTitle>Требования</InnerTitle>

          <InfoList>
            <Item>
              <CheckCircleIcon />
              <Typography variant={'title.medium'}>
                Минимальное количество символов 12
              </Typography>
            </Item>

            <Item>
              <CheckCircleIcon />
              <Typography variant={'title.medium'}>
                Минимальное количество изменившихся символов 1
              </Typography>
            </Item>

            <Item>
              <CheckCircleIcon />
              <Typography variant={'title.medium'}>
                Символов из набора 0-9 не менее 1
              </Typography>
            </Item>

            <Item>
              <CheckCircleIcon />
              <Typography variant={'title.medium'}>
                Символов из набора a-z не менее 1
              </Typography>
            </Item>

            <Item>
              <CheckCircleIcon />
              <Typography variant={'title.medium'}>
                Символов из набора A-Z не менее 1
              </Typography>
            </Item>

            <Item>
              <CheckCircleIcon />
              <Typography variant={'title.medium'}>
                Символов из набора !@#$%^&*()_ не менее 1
              </Typography>
            </Item>
          </InfoList>

          <Actions>
            <Button
              onClick={() => {
                navigate(path.unAuthorizedPaths.restorePassword.index());
              }}
              variant={'contained'}
              sx={{ width: '165px' }}
              size={'medium'}>
              Хорошо
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

const InfoList = styled(Box)`
  display: flex;
  padding: 16px 0 87px 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
`;

const Item = styled(Box)`
  border-radius: 100px;
  background: #fff;
  display: flex;
  height: 40px;
  padding: 8px 12px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

const Actions = styled(Box)`
  display: flex;
  padding: 16px 0px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
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
export default FAQ;
