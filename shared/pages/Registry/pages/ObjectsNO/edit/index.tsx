import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useHandleBreadcrumbs } from '../../../../../actions/breadcrumbs';
import { useAppDispatch } from '../../../../../hooks/useAppDispatch';
import { usePath } from '../../../../../hooks/usePath';
import { FullPageLoader, Input, Table, Typography } from '../../../../../ui';
import { headWithoutActions } from '../../../../../utils/table/headWithoutActions';
import { objectNoRegistryPagination } from '../view/constants';

const EditObjectNO = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { itemId } = useParams();

  const { protectedPaths } = usePath();
  const { handleBreadcrumbs } = useHandleBreadcrumbs();

  const columns = useMemo<any>(
    () => [
      {
        id: 'type',
        accessorKey: 'type',
        maxSize: 10,
        header: 'Тип',
        muiTableHeadCellProps: {
          classes: {
            head: 'table-start-cell',
          },
        },
        ...headWithoutActions,
        enableSorting: true,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return <div>Кабели</div>;
        },
      },
      {
        id: 'mark',
        accessorKey: 'mark',
        maxSize: 10,
        header: 'Марка',
        muiTableHeadCellProps: {
          classes: {
            head: 'table-start-cell',
          },
        },
        ...headWithoutActions,
        enableSorting: true,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return <div>СИП-2А-3х35+1х50</div>;
        },
      },
      {
        id: 'year',
        accessorKey: 'year',
        maxSize: 10,
        header: 'Год',
        muiTableHeadCellProps: {
          classes: {
            head: 'table-start-cell',
          },
        },
        ...headWithoutActions,
        enableSorting: true,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return <div>2004</div>;
        },
      },
      {
        id: 'count',
        accessorKey: 'count',
        maxSize: 10,
        header: 'Количество',
        muiTableHeadCellProps: {
          classes: {
            head: 'table-start-cell',
          },
        },
        ...headWithoutActions,
        enableSorting: true,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return <div>222</div>;
        },
      },
      {
        id: 'price',
        accessorKey: 'price',
        maxSize: 10,
        header: 'Цена',
        muiTableHeadCellProps: {
          classes: {
            head: 'table-start-cell',
          },
        },
        ...headWithoutActions,
        enableSorting: true,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return <div>526 920,00</div>;
        },
      },

      {
        id: 'manufacture',
        accessorKey: 'manufacture',
        maxSize: 10,
        header: 'Завод/Режим горения',
        muiTableHeadCellProps: {
          classes: {
            head: 'table-start-cell',
          },
        },
        ...headWithoutActions,
        enableSorting: true,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return <div>Неизвестно</div>;
        },
      },
    ],
    []
  );
  const columnsPP = useMemo<any>(
    () => [
      {
        id: 'number',
        accessorKey: 'number',
        maxSize: 10,
        header: 'Номер',
        muiTableHeadCellProps: {
          classes: {
            head: 'table-start-cell',
          },
        },
        ...headWithoutActions,
        enableSorting: true,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return <div>20346</div>;
        },
      },
      {
        id: 'street',
        accessorKey: 'street',
        maxSize: 10,
        header: 'Улица',
        muiTableHeadCellProps: {
          classes: {
            head: 'table-start-cell',
          },
        },
        ...headWithoutActions,
        enableSorting: true,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return <div>-</div>;
        },
      },
      {
        id: 'landmark',
        accessorKey: 'landmark',
        maxSize: 10,
        header: 'Ориентир',
        muiTableHeadCellProps: {
          classes: {
            head: 'table-start-cell',
          },
        },
        ...headWithoutActions,
        enableSorting: true,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return <div>д.21 (стр.1)</div>;
        },
      },
      {
        id: 'lamps',
        accessorKey: 'lamps',
        maxSize: 10,
        header: 'Светильники',
        muiTableHeadCellProps: {
          classes: {
            head: 'table-start-cell',
          },
        },
        ...headWithoutActions,
        enableSorting: true,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return <div>1</div>;
        },
      },
    ],
    []
  );

  useEffect(() => {
    setIsLoading(false);

    handleBreadcrumbs([
      {
        text: 'Реестры',
        path: protectedPaths.iisuno.registry.index(),
      },
      {
        text: 'Объекты НО',
        path: protectedPaths.iisuno.registry.objectsNO.index(),
      },
      {
        text: `${itemId}`,
        path: protectedPaths.iisuno.registry.objectsNO.edit(itemId),
      },
    ]);
  }, []);

  if (isLoading) {
    return <FullPageLoader />;
  }

  return (
    <Wrapper>
      <Inner>
        <InnerWrapper>
          <InnerTitle>
            <Typography
              variant={'title.large'}
              bold>
              Информация об оборудовании
            </Typography>
          </InnerTitle>
          <BoxWrapper>
            <BoxTitle>
              <Typography
                variant={'title.large'}
                bold>
                Оборудование Объекта: 10037
              </Typography>
            </BoxTitle>
            <Divider />

            <Table
              localData={false}
              paginationName={objectNoRegistryPagination}
              columns={columns}
              data={[]}
              total={0}
            />
          </BoxWrapper>
        </InnerWrapper>
        <InnerWrapper>
          <InnerTitle>
            <Typography
              variant={'title.large'}
              bold>
              Информация об оборудовании
            </Typography>
          </InnerTitle>
          <BoxWrapper>
            <BoxTitle>
              <Typography
                variant={'title.large'}
                bold>
                Информация
              </Typography>
            </BoxTitle>
            <Divider />
            <Form>
              <Input
                wrapperSx={{
                  gridColumn: 'span 2',
                }}
                label={'Название'}
                inputProps={{
                  placeholder: 'Номер ШУНО',
                  id: 'standard-multiline-static',
                  multiline: false,
                }}
              />
              <Input
                wrapperSx={{
                  gridColumn: 'span 1',
                }}
                label={'Адрес'}
                inputProps={{
                  placeholder: 'Введите адрес',
                  id: 'standard-multiline-static',
                  multiline: false,
                }}
              />
              <Input
                wrapperSx={{
                  gridColumn: 'span 1',
                }}
                label={'Название'}
                inputProps={{
                  placeholder: 'Номер ШУНО',
                  id: 'standard-multiline-static',
                  multiline: false,
                }}
              />
              <Input
                wrapperSx={{
                  gridColumn: 'span 2',
                }}
                label={'Название'}
                inputProps={{
                  placeholder: 'Номер ШУНО',
                  id: 'standard-multiline-static',
                  multiline: true,
                  rows: 4,
                }}
              />
            </Form>
          </BoxWrapper>
          <BoxWrapper>
            <BoxTitle>
              <Typography
                variant={'title.large'}
                bold>
                Питающие ШУНО
              </Typography>
            </BoxTitle>
            <Divider />
            <Table
              enableTopToolbar={false}
              enableColumnFilterModes={false}
              enableColumnOrdering={false}
              enableGrouping={false}
              enableColumnPinning={false}
              enableFacetedValues={false}
              localData={false}
              paginationName={objectNoRegistryPagination}
              columns={columnsPP}
              data={[]}
              total={0}
            />
          </BoxWrapper>
        </InnerWrapper>
      </Inner>
    </Wrapper>
  );
};
const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  align-items: start;
  overflow: scroll;
  height: 100%;
`;

const Inner = styled(Box)`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: start;
  overflow: scroll;

  padding: 12px;
  gap: 12px;
  align-self: stretch;
`;
const InnerWrapper = styled(Box)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

const BoxWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  background: #fff;
`;
const BoxTitle = styled(Box)`
  display: flex;
  padding: 16px 12px 16px 24px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

const InnerTitle = styled(Box)`
  width: 100%;

  display: flex;
  min-height: 40px;
  padding: 4px 6px;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  border-radius: 100px;
  background: #fff;
`;

const Divider = styled(Box)`
  width: 100%;
  height: 1px;
  background: #91bfff;
`;
const Form = styled(Box)`
  padding: 12px;

  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

export default EditObjectNO;
