import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React, { useState } from 'react';

import { Avatar, BigFileSelect, Modal } from '../../ui';

interface IChangeAvatarProps {
  setOpen: React.Dispatch<boolean>;
  open: boolean;
}

export const ChangeAvatar = ({ open, setOpen }: IChangeAvatarProps) => {
  const avatarList: Record<'variant', TAvatarVariants>[] = [
    {
      variant: 'empty',
    },
    {
      variant: 'man',
    },
    {
      variant: 'woman',
    },
    {
      variant: 'logo',
    },
    {
      variant: 'text',
    },
    { variant: 'master' },
  ];
  const [active, setActive] = useState<TAvatarVariants>('empty');
  return (
    <Modal
      onCancel={() => {
        setOpen(false);
      }}
      onAccept={() => {
        setOpen(false);
      }}
      withClose={false}
      blueBackdrop={true}
      cancelText={'Отмена'}
      acceptText={'Сохранить'}
      title={'Редактирование аватарки'}
      open={open}>
      <Wrapper>
        <AvatarWrapper>
          {avatarList.map((el) => {
            return (
              <AvatarItemWrapper
                active={el.variant === active}
                onClick={() => {
                  setActive(el.variant);
                }}
                key={el.variant}>
                <Avatar variant={el.variant} />
              </AvatarItemWrapper>
            );
          })}
        </AvatarWrapper>
        <BigFileSelect
          withFileCount={false}
          helpText={
            'Выберите графический файл или перетащите его в поле загрузки для создания своего аватара. '
          }
        />
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const AvatarWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const AvatarItemWrapper = styled(Box)<{ active: boolean }>`
  cursor: pointer;
  ${(p) =>
    p.active &&
    `border-radius: 100px;
  border: 6px solid rgba(15, 116, 255, 0.2);`}
`;
