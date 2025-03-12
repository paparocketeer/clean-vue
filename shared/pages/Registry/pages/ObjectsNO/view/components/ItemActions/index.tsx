import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePath } from 'src/shared/hooks/usePath';
import { EllipsisIcon } from 'src/shared/icons';
import { BaseMenu } from 'src/shared/ui/Menu';

import { BlockObjectNO } from '../../../components/modals/BlockObjectNO';
import { DeleteObjectNO } from '../../../components/modals/DeleteObjectNO';
import {
  objectNORegistryActionsList,
  objectNORegistryActionsListKeys,
} from './constants';

interface IItemActionsProps {
  id: string;
  name: string;
  blocked?: boolean;
}

const ItemActions = ({ name, id, blocked = false }: IItemActionsProps) => {
  const { palette } = useTheme();
  const [banUserStatus, setBanUserStatus] = React.useState(false);
  const [deleteUserStatus, setDeleteUserStatus] = React.useState(false);
  const navigate = useNavigate();
  const path = usePath();

  const actions: Record<
    keyof typeof objectNORegistryActionsListKeys,
    Function
  > = {
    block: () => {
      setBanUserStatus(true);
    },
    delete: () => {
      setDeleteUserStatus(true);
    },
    edit: () => {
      navigate(path.protectedPaths.iisuno.registry.objectsNO.edit(id));
    },
  };

  return (
    <>
      <BaseMenu
        onChange={(item) => {
          const id = item.id as keyof typeof objectNORegistryActionsListKeys;
          actions[id]();
        }}
        list={objectNORegistryActionsList(false)}>
        <InfoButton>
          <EllipsisIcon color={palette.Accent.Primary} />
        </InfoButton>
      </BaseMenu>
      <BlockObjectNO
        open={banUserStatus}
        setOpen={setBanUserStatus}
        name={name}
        id={id}
        isBanned={blocked}
      />
      <DeleteObjectNO
        id={id}
        setOpen={setDeleteUserStatus}
        name={name}
        open={deleteUserStatus}
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
