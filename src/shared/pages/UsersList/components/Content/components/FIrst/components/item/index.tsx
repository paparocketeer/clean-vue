import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePath } from 'src/shared/hooks/usePath';
import { EllipsisIcon } from 'src/shared/icons';
import { Avatar, Input, Typography } from 'src/shared/ui';
import { BaseMenu } from 'src/shared/ui/Menu';
import { ICheckedItem } from 'src/shared/ui/Menu/types';

import { userActionsList, userActionsListKeys } from '../../../../constants';
import { BanUser } from '../../../modals/BanUser';
import { DeleteUser } from '../../../modals/DeleteUser';
import { RestoringAccessStatus } from '../../../modals/RestoringAccess';

export const Item = () => {
  const { palette } = useTheme();
  const [restoringAccessStatus, setRestoringAccessStatus] =
    React.useState(false);
  const [banUserStatus, setBanUserStatus] = React.useState(false);
  const [deleteUserStatus, setDeleteUserStatus] = React.useState(false);
  const navigate = useNavigate();
  const path = usePath();

  const actions: Record<keyof typeof userActionsListKeys, Function> = {
    'ban-user': (item: ICheckedItem) => {
      setBanUserStatus(true);
    },
    'delete-user': (item: ICheckedItem) => {
      setDeleteUserStatus(true);
    },
    'send-repair-message': (item: ICheckedItem) => {
      setRestoringAccessStatus(true);
    },
    'user-card': (item: ICheckedItem) => {
      navigate(path.protectedPaths.iisuno.administration.userItem(item.id));
    },
  };

  return (
    <Wrapper>
      {/* <Head>
        <HeadInner>
          <Avatar variant={'man'} />
          <NameWrapper>
            <Typography
              variant={'title.medium'}
              bold>
              Администратор
            </Typography>
            <Typography
              variant={'title.small'}
              bold>
              Иванов Иван Иванович
            </Typography>
          </NameWrapper>
        </HeadInner>
        <BaseMenu
          onChange={(item) => {
            const id = item.id as keyof typeof userActionsListKeys;
            actions[id](item);
          }}
          list={userActionsList(true)}>
          <InfoButton>
            <EllipsisIcon color={palette.Accent.Primary} />
          </InfoButton>
        </BaseMenu>
      </Head>
      <Form>
        <Input
          label={'Логин'}
          inputProps={{ value: 'ArtemRa', disabled: true }}
          labelProps={{
            color: 'colors.Black',
          }}
        />
        <Input
          label={'Роль'}
          inputProps={{ value: 'ArtemRa', disabled: true }}
          labelProps={{
            color: 'colors.Black',
          }}
        />
        <Input
          label={'Организация'}
          inputProps={{ value: 'ArtemRa', disabled: true }}
          labelProps={{
            color: 'colors.Black',
          }}
        />
        <Input
          label={'Должность'}
          inputProps={{ value: 'ArtemRa', disabled: true }}
          labelProps={{
            color: 'colors.Black',
          }}
        />
        <Input
          label={'Метаинформация'}
          inputProps={{ value: 'ArtemRa', disabled: true }}
          labelProps={{
            color: 'colors.Black',
          }}
        />
        <Input
          label={'Статус'}
          inputProps={{ value: 'ArtemRa', disabled: true }}
          labelProps={{
            color: 'colors.Black',
          }}
        />
        <Input
          label={'Телефон'}
          inputProps={{ value: 'ArtemRa', disabled: true }}
          labelProps={{
            color: 'colors.Black',
          }}
        />
        <Input
          label={'Адрес эл. почты'}
          inputProps={{ value: 'ArtemRa', disabled: true }}
          labelProps={{
            color: 'colors.Black',
          }}
        />
      </Form>
      <BanUser
        open={banUserStatus}
        setOpen={setBanUserStatus}
        userName={'Арт'}
        isBanned={true}
      />
      <DeleteUser
        setOpen={setDeleteUserStatus}
        open={deleteUserStatus}
        userName={'Арт'}
      />
      <RestoringAccessStatus
        open={restoringAccessStatus}
        setOpen={setRestoringAccessStatus}
        userName={'Арт'}
      />*/}
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  border-radius: 24px;
  background: ${(p) => p.theme.palette.colors.White};
  box-shadow:
    0 6px 6px 0 rgba(0, 0, 0, 0.05),
    0 -1px 4px 0 rgba(0, 0, 0, 0.06),
    0 0 6px 0 rgba(0, 0, 0, 0.03);
`;

const Head = styled(Box)`
  display: flex;
  padding: 8px 24px;
  align-self: stretch;
  border-bottom: 1px solid ${(p) => p.theme.palette.Accent.Primary};
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const HeadInner = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const NameWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const Form = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8px;
  row-gap: 4px;
  padding: 8px 16px 16px 16px;
`;

const InfoButton = styled(IconButton)`
  background: ${(p) =>
    p.theme.palette.Palette['palette-primary-blue']['palette-primary-blue-50']};

  :hover {
    background: ${(p) =>
      p.theme.palette.Palette['palette-primary-blue'][
        'palette-primary-blue-100'
      ]};
  }
`;
