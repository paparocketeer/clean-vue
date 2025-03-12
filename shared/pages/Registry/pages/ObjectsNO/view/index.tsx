import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHandleBreadcrumbs } from 'src/shared/actions/breadcrumbs';
import { usePath } from 'src/shared/hooks/usePath';

import { useAppDispatch } from '../../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../../hooks/useAppSelector';
import { usePagination } from '../../../../../hooks/usePagination';
import { selectRegistryControllers } from '../../../../../store/selectors/registry';
import { getControllersList } from '../../../../../store/slices/registry';
import { FullPageLoader, Pagination, Table } from '../../../../../ui';
import { CheckCell } from '../../../../../ui/Table/components/CheckCell';
import { headWithoutActions } from '../../../../../utils/table/headWithoutActions';
import { ItemActions } from './components/ItemActions';
import { objectNoRegistryPagination } from './constants';

const ObjectsNO = () => {
  const dispatch = useAppDispatch();
  const points = useAppSelector((state) => selectRegistryControllers(state));
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { handleBreadcrumbs } = useHandleBreadcrumbs();
  const { protectedPaths } = usePath();
  const { pagination } = usePagination(
    objectNoRegistryPagination,
    points?.total || 0
  );

  useEffect(() => {
    setIsLoading(true);
    dispatch(
      getControllersList({
        limit: pagination.pageSize,
        offset: 0,
      })
    ).finally(() => {
      setIsLoading(false);
    });

    handleBreadcrumbs([
      {
        text: 'Реестры',
        path: protectedPaths.iisuno.registry.index(),
      },
      {
        text: 'Объекты НО',
        path: protectedPaths.iisuno.registry.objectsNO.index(),
      },
    ]);
  }, []);

  const columns = useMemo<any>(
    () => [
      {
        id: 'status',
        accessorKey: 'status',
        maxSize: 10,
        header: 'Светильники',
        muiTableHeadCellProps: {
          classes: {
            head: 'table-centred-cell',
          },
        },
        ...headWithoutActions,
        enableSorting: true,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return <CheckCell status={data.renderedCellValue} />;
        },
      },
      {
        id: 'name',
        accessorKey: 'name',
        header: 'Ориентир',
        maxSize: 10,

        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: () => {
          return (
            <div
              style={{
                cursor: 'pointer',
              }}>
              проезд от д19 до Ярославского ш. д107
            </div>
          );
        },
      },
      {
        id: 'is_mnemoscheme_compatible',
        accessorKey: 'is_mnemoscheme_compatible',
        maxSize: 10,
        header: 'Административный\n округ',
        muiTableHeadCellProps: {
          classes: {
            head: 'table-centred-cell',
          },
        },
        ...headWithoutActions,
        enableSorting: true,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: () => {
          return <div>СВАО</div>;
        },
      },
      {
        id: 'is_connected',
        accessorKey: 'is_connected',
        header: 'Район',
        maxSize: 10,
        muiTableHeadCellProps: {
          classes: {
            head: 'table-centred-cell',
          },
        },
        ...headWithoutActions,
        enableSorting: true,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: () => {
          return <div>Бабушкинский</div>;
        },
      },
      {
        id: 'hosts',
        accessorKey: 'hosts',
        header: 'Участок',
        maxSize: 10,

        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return <div>ОЭК Северо-Восточный РЭС</div>;
        },
      },
      {
        id: 'sim_cards',
        accessorKey: 'sim_cards',
        header: 'Инвентарный\n номер',
        maxSize: 10,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return <div>10037</div>;
        },
      },
      {
        id: 'address',
        accessorKey: 'address',
        header: 'Дата ППР',
        maxSize: 10,

        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return <div>10037</div>;
        },
      },
      {
        id: 'groups',
        accessorKey: 'groups',
        header: 'Статус',
        maxSize: 10,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return <CheckCell status={false} />;
        },
      },
      {
        id: 'manufacturer',
        accessorKey: 'manufacturer',
        header: 'Улица',
        maxSize: 10,

        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return <div>Большой Матросский переулок</div>;
        },
      },
      {
        id: 'protocol',
        accessorKey: 'protocol',
        header: 'Дата ввода',
        maxSize: 10,

        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return <div>17.12.2020</div>;
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
          return (
            <div className={'sticky_col'}>
              <ItemActions {...data.row.original} />
            </div>
          );
        },
      },
    ],
    []
  );

  if (isLoading) {
    return <FullPageLoader />;
  }

  return (
    <Wrapper>
      <Table
        localData={false}
        paginationName={objectNoRegistryPagination}
        columns={columns}
        data={points.items || []}
        total={points.total || 0}
      />
      <Pagination
        name={objectNoRegistryPagination}
        onChange={(page, pageSize) => {
          dispatch(
            getControllersList({
              limit: pageSize,
              offset: (page - 1) * pageSize + 1,
            })
          );
        }}
        total={points.total || 0}
      />
    </Wrapper>
  );
};
export default ObjectsNO;
const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  background: ${(p) => p.theme.palette.colors.White};
  border-radius: 15px;
  overflow: scroll;
  height: 100%;
`;
