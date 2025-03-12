import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useHandleBreadcrumbs } from '../../actions/breadcrumbs';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { usePath } from '../../hooks/usePath';
import { fetchUserItem } from '../../store/slices/users';
import { Container } from './components/Content';
import { Header } from './components/Header';

const UserItem = () => {
  const { protectedPaths } = usePath();
  const { id } = useParams();

  const [isEditEnable, setIsEditEnable] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const { handleBreadcrumbs } = useHandleBreadcrumbs();

  useEffect(() => {
    dispatch(fetchUserItem({ id: id || '0' }));

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
        text: 'Карточка пользователя',
        path: protectedPaths.iisuno.administration.userItem(),
      },
    ]);
  }, []);

  return (
    <Wrapper>
      <Header
        editMode={isEditEnable}
        setEditMode={setIsEditEnable}
      />
      <Container isEditEnable={isEditEnable} />
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

export default UserItem;
