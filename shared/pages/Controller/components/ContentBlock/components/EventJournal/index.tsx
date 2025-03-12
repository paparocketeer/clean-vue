import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePath } from 'src/shared/hooks/usePath';
import { Pagination, Table } from 'src/shared/ui';
import { headWithoutActions } from 'src/shared/utils/table/headWithoutActions';

import { IData } from './types';

const data: IData[] = new Array(100);

data.fill(
  {
    time: '13:26:02',
    date: '24.06.2024',
    object: '2572-1',
    description: 'Наличие плавкой вставки 9. Фаза A',
    status: 'Отсутствует',
    id: '1',
    user: 'Отсутствует',
  },
  0,
  100
);
export const EventJournal = () => {
  const { groupId } = useParams();

  const navigate = useNavigate();
  const path = usePath();
  const columns = useMemo<any>(
    () => [
      {
        id: 'id',
        maxSize: 10,
        accessorKey: 'id',
        ...headWithoutActions,
        muiTableHeadCellProps: {
          classes: {
            head: 'table-centred-cell',
          },
        },
        header: 'ID',
        Cell: (data) => {
          const v = data.row.original.object;
          return <CellCenter>{v}</CellCenter>;
        },
      },
      {
        id: 'date',
        maxSize: 100,
        accessorKey: 'date',
        header: 'Дата',
      },
      {
        id: 'time',
        maxSize: 100,

        accessorKey: 'time',
        header: 'Время',
      },
      {
        id: 'object',
        maxSize: 100,

        accessorKey: 'object',
        header: 'Объект',
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          const v = data.row.original.object;
          return (
            <Button
              variant={'text'}
              onClick={() => {
                navigate(
                  path.protectedPaths.iisuno.groups.controller(groupId, v)
                );
              }}>
              {v}
            </Button>
          );
        },
      },
      {
        id: 'description',
        maxSize: 100,

        accessorKey: 'description',
        header: 'Описание',
      },
      {
        id: 'status',
        maxSize: 100,

        accessorKey: 'status',
        header: 'Значение',
      },
      {
        id: 'user',
        maxSize: 100,

        accessorKey: 'user',
        header: 'Пользователь',
      },
    ],
    []
  );

  return (
    <SchemeWrapper>
      <Table
        total={100}
        columns={columns}
        data={data}
        paginationName={'event-journal'}
      />
      <Pagination
        total={100}
        name={'event-journal'}
      />
    </SchemeWrapper>
  );
};
const SchemeWrapper = styled(Box)`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  border-radius: 24px;
  background: #ffffff;
  padding: 16px;
`;

const CellCenter = styled(Box)`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
