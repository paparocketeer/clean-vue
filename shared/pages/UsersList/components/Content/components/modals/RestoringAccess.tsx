import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { useNotification } from 'src/shared/hooks/useNotification';
import { BigSendMessageIcon } from 'src/shared/icons';
import { Modal, Typography } from 'src/shared/ui';

interface IRestoringAccessStatusProps {
  setOpen: React.Dispatch<boolean>;
  open: boolean;
  userName: string;
}

export const RestoringAccessStatus = ({
  open,
  setOpen,
  userName,
}: IRestoringAccessStatusProps) => {
  const { showNoty } = useNotification();

  return (
    <Modal
      onCancel={() => {
        setOpen(false);
      }}
      onAccept={() => {
        setOpen(false);

        showNoty({
          variant: 'success',
          message:
            'На указанный адрес электронной почты отправили ссылку  и информацию для восстановления доступа',
        });
      }}
      withClose={false}
      blueBackdrop={true}
      cancelText={'Нет'}
      acceptText={'Да'}
      title={'Восстановление доступа'}
      open={open}>
      <Wrapper>
        <BigSendMessageIcon />
        <Text variant={'body.large'}>
          Вы уверены, что хотите отправить ссылку на <br />
          восстановление пароля пользователю <br />
          {userName}?
        </Text>
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
