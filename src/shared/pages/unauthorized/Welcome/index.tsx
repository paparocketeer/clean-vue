import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePath } from 'src/shared/hooks/usePath';
import { Icon4, RArrowIcon } from 'src/shared/icons';
import { Typography } from 'src/shared/ui';

const Welcome = () => {
  const navigate = useNavigate();
  const path = usePath();

  return (
    <Wrapper>
      <Left>
        <Icon4 />
        <TitleWrapper>
          <Typography variant={'display.small'}>
            Доступ к экосистеме ИИУСНО
          </Typography>
          <Typography variant={'title.medium'}>
            Единая экосистема управления наружным освещением
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
          <ContentItem>
            <ContentTitle>
              <Typography variant={'headline.small'}>
                Авторизация в ИИУСНО
              </Typography>
              <Typography variant={'title.medium'}>
                Централизованное управление наружным освещением
              </Typography>
            </ContentTitle>
            <Button
              endIcon={<RArrowIcon />}
              onClick={() => {
                navigate(path.protectedPaths.iisuno.groups.index());
              }}
              variant={'contained'}>
              Перейти
            </Button>
          </ContentItem>
          <ContentItem>
            <ContentTitle>
              <Typography variant={'headline.small'}>
                Обратная связь с поддержкой
              </Typography>
              <Typography variant={'title.medium'}>
                Восстановление доступа к системе, разрешение проблем <br />с
                работой системы, устранение ошибок
              </Typography>
            </ContentTitle>

            <Button
              variant={'contained'}
              onClick={() => {
                navigate(path.unAuthorizedPaths.supportForm.index());
              }}>
              Написать в поддержку
            </Button>
          </ContentItem>
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
`;

const InnerRight = styled(Box)`
  margin-top: 154px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 54px;
`;

const ContentItem = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ContentTitle = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export default Welcome;
