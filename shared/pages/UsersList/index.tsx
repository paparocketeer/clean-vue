import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React, { useEffect } from 'react';

import { useHandleBreadcrumbs } from '../../actions/breadcrumbs';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { usePath } from '../../hooks/usePath';
import { fetchRolesList } from '../../store/slices/users/roles';
import { Content } from './components/Content';
import { Footer } from './components/Footer';

const UsersList = () => {
  const { protectedPaths } = usePath();
  const dispatch = useAppDispatch();

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
    ]);
    dispatch(fetchRolesList());
  }, []);

  return (
    <Wrapper>
      {/*<Head />*/}
      <Content />
      <Footer />
    </Wrapper>
  );
};

export default UsersList;

const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  background: ${(p) => p.theme.palette.colors.White};
  border-radius: 15px;
  overflow: hidden;
  height: 100%;
`;
