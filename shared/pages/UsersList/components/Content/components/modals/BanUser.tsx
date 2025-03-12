import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { useAppDispatch } from 'src/shared/hooks/useAppDispatch';
import { useNotification } from 'src/shared/hooks/useNotification';
import { BigBlockIcon, BigUnlockIcon } from 'src/shared/icons';
import { blockUser, unBlockUser } from 'src/shared/store/slices/users';
import { Modal, Typography } from 'src/shared/ui';

interface IRestoringAccessStatusProps {
  setOpen: React.Dispatch<boolean>;
  open: boolean;
  userName: string;
  isBanned: boolean;
  id: string;
}

export const BanUser = ({
  open,
  setOpen,
  userName,
  isBanned,
  id,
}: IRestoringAccessStatusProps) => {
  const { showNoty } = useNotification();
  const dispatch = useAppDispatch();

  return (
    <Modal
      onCancel={() => {
        setOpen(false);
      }}
      onAccept={() => {
        setOpen(false);
        if (isBanned) {
          dispatch(unBlockUser({ id }));
          showNoty({
            variant: 'info',
            message: 'Пользователь разблокирован',
          });
          1;
        } else {
          dispatch(blockUser({ id }));
          showNoty({
            variant: 'info',
            message: 'Пользователь заблокирован',
          });
        }
      }}
      withClose={false}
      blueBackdrop={true}
      cancelText={'Отмена'}
      acceptText={isBanned ? 'Разблокировать' : 'Заблокировать'}
      title={'Блокировка пользователя'}
      open={open}>
      <Wrapper>
        {isBanned ? (
          <>
            <BigUnlockIcon />
            <Text variant={'body.large'}>
              Вы действительно хотите <br />
              разблокировать пользователя <br />
              {userName}?
            </Text>
          </>
        ) : (
          <>
            <BigBlockIcon />
            <Text variant={'body.large'}>
              Вы действительно хотите <br />
              заблокировать пользователя <br />
              {userName}?
            </Text>
          </>
        )}
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled(Box)`
  gap: 16px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled(Typography)`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;
