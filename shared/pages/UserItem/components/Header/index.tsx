import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePath } from 'src/shared/hooks/usePath';
import { Typography } from 'src/shared/ui';

import { useAppSelector } from '../../../../hooks/useAppSelector';
import { selectUserById } from '../../../../store/selectors/users';

interface IHeaderProps {
  setEditMode: (status: boolean) => void;
  editMode: boolean;
}
export const Header = ({ setEditMode, editMode }: IHeaderProps) => {
  const { id } = useParams();

  const navigate = useNavigate();

  const path = usePath();

  const user = useAppSelector((state) => selectUserById(state));

  if (!id) {
    return <></>;
  }

  return (
    <Wrapper>
      <TitleWrapper>
        <Typography
          bold
          variant={'title.large'}>
          Карточка пользователя
        </Typography>
        <Typography
          bold
          color={'Accent.Primary'}
          variant={'title.large'}>
          {user?.fullname}
        </Typography>
      </TitleWrapper>
      <ActionsWrapper>
        {editMode ? (
          <>
            <Button
              onClick={() => {
                setEditMode(false);
              }}
              sx={{ width: '145px', height: '40px' }}
              variant={'outlined'}>
              Отмена
            </Button>
            <Button
              onClick={() => {
                const createUserActions =
                  document.getElementById('update-user-action');

                if (createUserActions) {
                  createUserActions.click();
                }
              }}
              sx={{ width: '145px', height: '40px' }}
              variant={'contained'}>
              Сохранить
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => {
                navigate(path.protectedPaths.iisuno.administration.users());
              }}
              sx={{ width: '145px', height: '40px' }}
              variant={'outlined'}>
              Назад
            </Button>
            <Button
              onClick={() => {
                setEditMode(true);
              }}
              sx={{ width: '165px', height: '40px' }}
              variant={'contained'}>
              Редактировать
            </Button>
          </>
        )}
      </ActionsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  padding: 12px 12px 12px 24px;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-bottom: 1px solid ${(p) => p.theme.palette.Accent.Primary};
`;

const TitleWrapper = styled(Box)`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: start;
`;

const ActionsWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
`;
