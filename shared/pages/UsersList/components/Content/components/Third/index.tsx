import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { MRT_ColumnDef } from 'material-react-table';
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePath } from 'src/shared/hooks/usePath';
import { PlusCircleIcon } from 'src/shared/icons';
import { ImportExportIcon } from 'src/shared/icons/ImportExport';
import { Avatar, Table, Typography } from 'src/shared/ui';
import { BaseMenu } from 'src/shared/ui/Menu';

import { useAppSelector } from '../../../../../../hooks/useAppSelector';
import { selectRoles } from '../../../../../../store/selectors/users/roles';
import { paginationId } from '../../../../constants';
import {
  importExportList,
  importExportListKeys,
  statusListIcons,
} from '../../../Head/components/Filters/constants';
import { ItemActions } from '../../../ItemActions';
import data from './data.json';

interface IThirdProps {
  list: any;
}
export const Third = ({ list }: IThirdProps) => {
  const roles = useAppSelector(selectRoles);

  const columns = useMemo<MRT_ColumnDef<any, any>[]>(
    () => [
      {
        id: 'status',
        header: 'Статус',
        accessorKey: 'permanent_blocked',
        enableColumnActions: false,
        enableHiding: false,
        enableColumnDragging: false,
        enableGrouping: false,
        enableSorting: false,
        enableMultiSort: false,
        enablePinning: false,
        enableResizing: false,
        enableGlobalFilter: false,
        enableColumnFilter: false,
        muiTableHeadCellProps: {
          classes: {
            head: 'table-centred-cell',
          },
        },
        maxSize: 5,
        // eslint-disable-next-line react/no-unstable-nested-components
        Header: (data) => {
          return (
            <StatusHeadCell>{data.column.columnDef.header}</StatusHeadCell>
          );
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return (
            <IconWrapper>
              {data.row.original.permanent_blocked
                ? statusListIcons['ban-users']
                : statusListIcons['active-users']}
            </IconWrapper>
          );
        },
      },
      {
        id: 'fio',
        accessorKey: 'fio',
        header: 'ФИО',
        maxSize: 15,
        enableColumnDragging: false,

        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return (
            <FioCellWrapper>
              <Avatar
                width={'32px'}
                height={'32px'}
                variant={'man'}
              />
              {data.row.original?.fullname}
            </FioCellWrapper>
          );
        },
      },
      {
        id: 'position',
        accessorKey: 'position',
        header: 'Роль',
        maxSize: 10,
        enableColumnDragging: false,

        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          const item = roles.items.find(
            (el) => el.id === data.row.original.role
          );

          return item?.name || '';
        },
      },
      {
        id: 'login',
        accessorKey: 'login',
        header: 'Логин',
        maxSize: 5,
        enableColumnDragging: false,

        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return data.row.original.user;
        },
      },
      {
        id: 'organization',
        accessorKey: 'organization',
        header: 'Организация',
        maxSize: 5,
        enableColumnDragging: false,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return data.row.original.company;
        },
      },
      {
        id: 'position',
        accessorKey: 'position',
        header: 'Должность',
        enableColumnDragging: false,

        maxSize: 5,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return data.row.original.position;
        },
      },
      {
        id: 'phone',
        accessorKey: 'phone',
        header: 'Телефон',
        maxSize: 5,
        enableColumnDragging: false,

        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return data.row.original.phone;
        },
      },
      {
        id: 'email',
        accessorKey: 'email',
        header: 'Адрес эл. почты',
        enableColumnDragging: false,

        maxSize: 5,
        Cell: (data) => {
          return data.row.original.email;
        },
      },
      {
        id: 'actions',
        header: '',
        enableColumnActions: false,
        enableHiding: false,
        enableColumnDragging: false,
        maxSize: 5,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return <ItemActions {...data.row.original} />;
        },
      },
    ],
    [roles.total]
  );

  const path = usePath();

  const navigate = useNavigate();
  return (
    <Table
      total={list.total}
      paginationName={paginationId}
      columns={columns}
      data={list.items}
      headRight={
        <>
          {/*<BaseMenu
            onChange={(el) => {
              const id = el.id as keyof typeof importExportListKeys;
            }}
            list={importExportList}>
            <Button
              sx={{
                padding: '7px 15px',
              }}
              variant={'outlined'}
              startIcon={
                <ImportExportIcon
                  width={24}
                  height={24}
                />
              }>
              Импорт/Экспорт
            </Button>
          </BaseMenu>*/}
          <HeadWrapper>
            <InfoWrapper>
              <Typography
                variant={'body.medium'}
                color={'alert.alert-gray'}>
                Нашлось
              </Typography>
              <Typography
                variant={'body.medium'}
                bold
                color={'Accent.Primary'}>
                {list.total}
              </Typography>
              <Typography
                variant={'body.medium'}
                color={'alert.alert-gray'}>
                пользователей
              </Typography>
            </InfoWrapper>
          </HeadWrapper>
          <Button
            onClick={() => {
              navigate(path.protectedPaths.iisuno.administration.createUser());
            }}
            variant={'contained'}
            startIcon={<PlusCircleIcon />}>
            Создать пользователя
          </Button>
        </>
      }
    />
  );
};

const InfoWrapper = styled(Box)`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const HeadWrapper = styled(Box)`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`;

const IconWrapper = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const StatusHeadCell = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const FioCellWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
`;
