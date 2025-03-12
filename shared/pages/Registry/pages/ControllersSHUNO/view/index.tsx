import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHandleBreadcrumbs } from 'src/shared/actions/breadcrumbs';
import { useAppDispatch } from 'src/shared/hooks/useAppDispatch';
import { useAppSelector } from 'src/shared/hooks/useAppSelector';
import { usePagination } from 'src/shared/hooks/usePagination';
import { usePath } from 'src/shared/hooks/usePath';
import { IpLevel, PlusCircleIcon } from 'src/shared/icons';
import { selectRegistryControllers } from 'src/shared/store/selectors/registry';
import { getControllersList } from 'src/shared/store/slices/registry';
import { FullPageLoader, Pagination, Table, Typography } from 'src/shared/ui';
import { CheckCell } from 'src/shared/ui/Table/components/CheckCell';
import { IconCell } from 'src/shared/ui/Table/components/IconCell';
import { headWithoutActions } from 'src/shared/utils/table/headWithoutActions';

const ControllersSHUNO = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const points = useAppSelector((state) => selectRegistryControllers(state));

  const { pagination } = usePagination(
    'registry-pagination',
    points?.total || 0
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { handleBreadcrumbs } = useHandleBreadcrumbs();
  const { protectedPaths } = usePath();

  const columns = useMemo<any>(
    () => [
      {
        id: 'status',
        accessorKey: 'status',
        maxSize: 10,
        header: 'Статус',
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
        header: 'Номер',
        maxSize: 10,

        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return (
            <div
              style={{
                cursor: 'pointer',
              }}
              onClick={() => {
                navigate(
                  protectedPaths.iisuno.registry.controllersSHUNO.edit(
                    data.row.original.id
                  )
                );
              }}>
              {data.renderedCellValue}
            </div>
          );
        },
      },
      {
        id: 'is_mnemoscheme_compatible',
        accessorKey: 'is_mnemoscheme_compatible',
        maxSize: 10,
        header: 'Мнемосхема',
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
        id: 'is_connected',
        accessorKey: 'is_connected',
        header: 'Связь',
        maxSize: 10,
        muiTableHeadCellProps: {
          classes: {
            head: 'table-centred-cell',
          },
        },
        ...headWithoutActions,
        enableSorting: true,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return (
            <IconCell>
              <IpLevel variant={data.renderedCellValue ? 'green' : 'red'} />
            </IconCell>
          );
        },
      },
      {
        id: 'hosts',
        accessorKey: 'hosts',
        header: 'IP адрес',
        maxSize: 10,

        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return (
            <div>
              {data?.renderedCellValue?.map((el) => {
                return (
                  <>
                    {el} <br />
                  </>
                );
              })}
            </div>
          );
        },
      },
      {
        id: 'sim_cards',
        accessorKey: 'sim_cards',
        header: 'Активная \n сим-карта',
        maxSize: 10,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          if (!data?.renderedCellValue) {
            return (
              <>
                Информация <br />
                отсутствует
              </>
            );
          }
          return (
            <div>
              {data.renderedCellValue?.map((el) => {
                return (
                  <>
                    {el} <br />
                  </>
                );
              })}
            </div>
          );
        },
      },
      {
        id: 'address',
        accessorKey: 'address',
        header: 'Адрес',
        maxSize: 10,

        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return data.renderedCellValue;
        },
      },
      {
        id: 'groups',
        accessorKey: 'groups',
        header: 'Группа',
        maxSize: 10,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return (
            <div>
              {data?.renderedCellValue?.map((el, index, arr) => {
                return (
                  <span key={el}>
                    {el}
                    {arr[index + 1] ? (
                      <>
                        , <br />
                      </>
                    ) : (
                      <></>
                    )}
                  </span>
                );
              })}
            </div>
          );
        },
      },
      {
        id: 'manufacturer',
        accessorKey: 'manufacturer',
        header: 'Производитель',
        maxSize: 10,

        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return data.renderedCellValue;
        },
      },
      {
        id: 'protocol',
        accessorKey: 'protocol',
        header: 'Протокол',
        maxSize: 10,

        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return data.renderedCellValue;
        },
      },
      {
        id: 'Toir_id',
        accessorKey: 'Toir_id',
        header: 'Идентификатор \n ТОиР',
        maxSize: 10,

        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (data) => {
          return data.renderedCellValue;
        },
      },
    ],
    []
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
        text: 'Контроллеры',
        path: protectedPaths.iisuno.registry.controllersSHUNO.index(),
      },
    ]);
  }, []);

  if (isLoading) {
    return <FullPageLoader />;
  }

  return (
    <Wrapper>
      <Table
        localData={false}
        paginationName={'registry-pagination'}
        headRight={
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
                {points.total}
              </Typography>
              <Typography
                variant={'body.medium'}
                color={'alert.alert-gray'}>
                контроллера
              </Typography>
            </InfoWrapper>
            <Button
              onClick={() => {
                navigate(
                  protectedPaths.iisuno.registry.controllersSHUNO.edit()
                );
              }}
              variant={'contained'}
              startIcon={<PlusCircleIcon />}>
              Создать
            </Button>
          </HeadWrapper>
        }
        columns={columns}
        data={points.items || []}
        total={points.total || 0}
      />
      <Pagination
        name={'registry-pagination'}
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

const Wrapper = styled(Box)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  overflow: auto;
  gap: 12px;
  margin-top: 12px;
`;

export default ControllersSHUNO;
