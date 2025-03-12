import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePath } from 'src/shared/hooks/usePath';
import { BaseMenu } from 'src/shared/ui/Menu';

import { EllipsisIcon } from '../../../../icons';
import { TUserItem } from '../../../../types/users';
import { BanUser } from '../Content/components/modals/BanUser';
import { DeleteUser } from '../Content/components/modals/DeleteUser';
import { RestoringAccessStatus } from '../Content/components/modals/RestoringAccess';
import { userActionsList, userActionsListKeys } from '../Content/constants';

interface IItemActionsProps extends TUserItem {}

const ItemActions = ({
  id,
  permanent_blocked,
  fullname,
}: IItemActionsProps) => {
  const { palette } = useTheme();
  const [restoringAccessStatus, setRestoringAccessStatus] =
    React.useState(false);
  const [banUserStatus, setBanUserStatus] = React.useState(false);
  const [deleteUserStatus, setDeleteUserStatus] = React.useState(false);
  const navigate = useNavigate();
  const path = usePath();

  const actions: Record<keyof typeof userActionsListKeys, Function> = {
    'ban-user': () => {
      setBanUserStatus(true);
    },
    'delete-user': () => {
      setDeleteUserStatus(true);
    },
    'send-repair-message': () => {
      setRestoringAccessStatus(true);
    },
    'user-card': () => {
      navigate(path.protectedPaths.iisuno.administration.userItem(id));
    },
  };

  return (
    <>
      <BaseMenu
        onChange={(item) => {
          const id = item.id as keyof typeof userActionsListKeys;
          actions[id]();
        }}
        list={userActionsList(permanent_blocked)}>
        <InfoButton>
          <EllipsisIcon color={palette.Accent.Primary} />
        </InfoButton>
      </BaseMenu>
      <BanUser
        open={banUserStatus}
        setOpen={setBanUserStatus}
        userName={fullname}
        id={id}
        isBanned={permanent_blocked}
      />
      <DeleteUser
        id={id}
        setOpen={setDeleteUserStatus}
        userName={fullname}
        open={deleteUserStatus}
      />
      <RestoringAccessStatus
        open={restoringAccessStatus}
        setOpen={setRestoringAccessStatus}
        userName={fullname}
      />
    </>
  );
};

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

export { ItemActions };
