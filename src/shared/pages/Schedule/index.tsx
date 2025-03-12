import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import React, { useEffect, useMemo, useRef } from 'react';
import { Pagination, Table } from 'src/shared/ui';

import { usePagination } from '../../hooks/usePagination';
import { mapData } from './helper';
import testData from './testData.json';

const data: any = mapData(testData.data);

const now = dayjs();
const offsetCount =
  Math.round(now.diff(dayjs().startOf('year'), 'day', true)) -
  dayjs().date() +
  7;

const Schedule = () => {
  const ref = useRef<any>();
  const columns = useMemo<any>(
    () => [
      {
        id: 'plan',
        header:
          'График включения и отключения установок наружного освещения города Москвы.',
        columns: [
          {
            id: 'plan.date',
            accessorKey: 'plan.date',
            maxSize: 50,
            header: 'Дата',
            enableColumnActions: false,
          },
          {
            id: 'plan.enableTime',
            accessorKey: 'plan.enableTime',
            maxSize: 50,
            header: 'Время включения',
            enableColumnActions: false,
          },
          {
            id: 'plan.disableTime',
            accessorKey: 'plan.disableTime',
            maxSize: 50,
            header: 'Время отключения',
            enableColumnActions: false,
          },
          {
            id: 'plan.enabledTime',
            accessorKey: 'plan.enabledTime',
            maxSize: 50,
            header: 'Продолжительность горения в тёмное время суток',
            enableColumnActions: false,
          },
        ],
      },
      {
        id: 'fact',
        header:
          'Факт включения и отключения установок наружного освещения города Москвы.',
        columns: [
          {
            id: 'fact.date',
            accessorKey: 'fact.date',
            header: 'Дата',
            maxSize: 50,
            enableColumnActions: false,
          },
          {
            id: 'fact.enableTime',
            accessorKey: 'fact.enableTime',
            maxSize: 50,
            header: 'Время включения',
            enableColumnActions: false,
          },
          {
            id: 'fact.disableTime',
            accessorKey: 'fact.disableTime',
            maxSize: 50,
            header: 'Время отключения',
            enableColumnActions: false,
          },
          {
            id: 'fact.enabledTime',
            accessorKey: 'fact.enabledTime',
            maxSize: 50,
            header: 'Продолжительность горения в тёмное время суток',
            enableColumnActions: false,
          },
        ],
      },
      {
        id: 'deviation',
        accessorKey: 'deviation',
        enableColumnActions: false,
        header: 'отклонение',
      },
    ],
    []
  );

  const { handleChangePagination, pagination, totalPages } = usePagination(
    'schedule-pagination',
    365
  );

  useEffect(() => {
    ref?.current?.scrollTo(0, offsetCount * 53 - 130);
    handleChangePagination({
      pageIndex: Math.round(offsetCount / pagination.pageSize),
      pageSize: pagination.pageSize,
    });
  }, [ref?.current]);

  return (
    <Wrapper>
      <Table
        localData
        total={365}
        columns={columns}
        data={data}
        paginationName={'schedule-pagination'}
        muiTableContainerProps={{
          ref,
        }}
      />
      <Pagination
        total={365}
        name={'schedule-pagination'}
      />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  background: ${(p) => p.theme.palette.colors.White};
  border-radius: 15px;
`;

export default Schedule;
