import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { useAppDispatch } from 'src/shared/hooks/useAppDispatch';
import { useNotification } from 'src/shared/hooks/useNotification';
import { BigWarningIcon } from 'src/shared/icons';
import { deleteUser } from 'src/shared/store/slices/users';
import { Modal, Typography } from 'src/shared/ui';

interface IRestoringAccessStatusProps {
  setOpen: React.Dispatch<boolean>;
  open: boolean;
  name: string;
  id: string;
}

export const DeleteObjectNO = ({
  open,
  setOpen,
  name,
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
        showNoty({
          variant: 'success',
          message: 'Объект наружного освещения удален',
        });
        dispatch(deleteUser({ id }));
      }}
      withClose={false}
      blueBackdrop={true}
      cancelText={'Отмена'}
      acceptText={'Удалить'}
      title={'Удаление объекта наружного освещения'}
      open={open}>
      <Wrapper>
        <BigWarningIcon />
        <Text variant={'body.large'}>
          Вы действительно хотите <br />
          удалить объект наружного освещения <br />
          {name}?
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
