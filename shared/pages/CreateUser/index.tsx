import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React, { useEffect } from 'react';

import { useHandleBreadcrumbs } from '../../actions/breadcrumbs';
import { usePath } from '../../hooks/usePath';
import { Container } from './components/Content';
import { Header } from './components/Header';

const CreateUser = () => {
  const { protectedPaths } = usePath();

  const { handleBreadcrumbs } = useHandleBreadcrumbs();

  useEffect(() => {
    handleBreadcrumbs([
      {
        text: 'Администрирование',
        path: protectedPaths.iisuno.administration.index(),
      },
      {
        text: 'Пользователи',
        path: protectedPaths.iisuno.administration.users(),
      },
      {
        text: 'Новый пользователь',
        path: protectedPaths.iisuno.administration.createUser(),
      },
    ]);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Container />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  background: ${(p) => p.theme.palette.colors.White};
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  overflow: scroll;
`;

export default CreateUser;
