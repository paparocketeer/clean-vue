import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React, { FC, useState } from 'react';
import { StopCircleIcon } from 'src/shared/icons';
import { Typography } from 'src/shared/ui';

interface IActionsProps {
  itemId?: string;
}

export const Actions: FC<IActionsProps> = ({ itemId }) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <Wrapper>
      <Left>
        <Typography
          variant={'title.large'}
          bold>
          Карточка контроллера: {itemId}
        </Typography>
        <Status>
          <Typography variant={'body.medium'}>На связи</Typography>
          <Point />
        </Status>

        <Button
          sx={{
            width: '153px',
          }}
          size={'medium'}
          startIcon={<StopCircleIcon />}
          variant={'contained'}>
          Отключить
        </Button>
      </Left>

      <Right>
        {editMode ? (
          <>
            <ActionsButton
              onClick={() => {
                setEditMode(false);
              }}
              size={'medium'}
              variant={'outlined'}>
              Отменить
            </ActionsButton>
            <ActionsButton
              onClick={() => {
              }}
              size={'medium'}
              type={'submit'}
              variant={'contained'}>
              Сохранить
            </ActionsButton>
          </>
        ) : (
          <>
            <ActionsButton
              size={'medium'}
              variant={'outlined'}>
              Удалить
            </ActionsButton>
            <ActionsButton
              onClick={() => {
                setEditMode(true);
              }}
              size={'medium'}
              variant={'contained'}>
              Редактировать
            </ActionsButton>
          </>
        )}
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 12px 12px 9px;
`;

const Status = styled(Box)`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;

const Point = styled(Box)`
  width: 14px;
  height: 14px;
  background: #27ae60;
  border-radius: 50px;
`;

const ActionsButton = styled(Button)`
  width: 165px;
`;

const Left = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

const Right = styled(Box)`
  display: flex;
  gap: 8px;
`;
