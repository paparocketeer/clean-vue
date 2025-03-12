import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePath } from 'src/shared/hooks/usePath';
import { Typography } from 'src/shared/ui';

export const Header = () => {
  const navigate = useNavigate();
  const path = usePath();

  return (
    <Wrapper>
      <TitleWrapper>
        <Typography
          bold
          variant={'title.large'}>
          Создание нового пользователя
        </Typography>
      </TitleWrapper>
      <ActionsWrapper id={'create-user-actions'}>
        <Button
          onClick={() => {
            navigate(path.protectedPaths.iisuno.administration.users());
          }}
          sx={{ width: '145px', height: '40px' }}
          variant={'outlined'}>
          Отмена
        </Button>
        <Button
          onClick={() => {
            const createUserActions =
              document.getElementById('create-user-action');

            if (createUserActions) {
              createUserActions.click();
            }
          }}
          sx={{ width: '145px', height: '40px' }}
          variant={'contained'}>
          Создать
        </Button>
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
