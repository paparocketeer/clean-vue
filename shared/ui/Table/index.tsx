import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import {
  MaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ShowHideColumnsButton,
  MRT_ToggleFiltersButton,
  MRT_ToggleFullScreenButton,
  MRT_ToggleGlobalFilterButton,
  useMaterialReactTable,
} from 'material-react-table';
import { MRT_Localization_RU } from 'material-react-table/locales/ru';
import React, { useRef } from 'react';

import { usePagination } from '../../hooks/usePagination';
import { ITableProps } from './types';

export const Table = ({
  columns,
  data,
  paginationName,
  headRight,
  headLeft,
  total,
  localData,
  ...restOpt
}: ITableProps) => {
  const wrapperRef = useRef<HTMLDivElement | undefined>();
  const { handleChangePagination, pagination } = usePagination(
    paginationName,
    total
  );
  const table = useMaterialReactTable({
    columns,
    data: data as any,
    localization: MRT_Localization_RU,
    ...restOpt,
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableGrouping: true,
    enableColumnPinning: true,
    enableFacetedValues: true,
    enableRowActions: false,
    enableRowSelection: false,
    enableBottomToolbar: false,
    enableColumnActions: false,
    onPaginationChange: handleChangePagination,
    state: {
      pagination: {
        pageIndex: localData ? pagination.pageIndex - 1 : 0,
        pageSize: pagination.pageSize,
      },
    },
    initialState: {
      showColumnFilters: false,
      showGlobalFilter: true,
      columnPinning: {
        left: ['mrt-row-expand', 'mrt-row-select'],
        right: ['mrt-row-actions'],
      },
    },
    paginationDisplayMode: 'custom',
    positionToolbarAlertBanner: 'bottom',
    muiSearchTextFieldProps: {
      size: 'small',
      variant: 'outlined',
    },
    renderTopToolbar: ({ table }) => {
      return (
        <Box
          sx={() => ({
            display: 'flex',
            width: '100%',
            gap: '0.5rem',
            p: '8px',
            justifyContent: 'space-between',
          })}>
          <Head>
            <HeadLeft>
              <MRT_ToggleGlobalFilterButton table={table} />
              <MRT_GlobalFilterTextField
                table={table}
                classes={{
                  root: 'table-search-input',
                }}
              />
              <MRT_ToggleFiltersButton table={table} />
              <MRT_ToggleFullScreenButton table={table} />
              <MRT_ShowHideColumnsButton table={table} />
              {headLeft}
            </HeadLeft>
            {headRight && <HeadRight>{headRight}</HeadRight>}
          </Head>
        </Box>
      );
    },
    muiTableBodyCellProps: {
      className: 'tableColumnCell',
    },
    muiTableProps: {
      className: 'tableRoot',
    },
    muiTableHeadCellProps: {
      className: 'tableHeadCell',
    },
    muiTablePaperProps: {
      className: 'tablePaper',
    },
    muiTableContainerProps: {
      className: 'tableContainer',
    },
  });

  return (
    <Wrapper ref={wrapperRef}>
      <MaterialReactTable table={table} />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  padding: 6px;
  height: 100%;
  display: flex;
  width: 100%;
  overflow-x: hidden;

  .MuiPaper-root {
  }
  .tableContainer {
    width: 100%;
  }
  .tablePaper {
    width: 100%;
    height: 100%;
    box-shadow: none;
    overflow: scroll;
  }
  .tableRoot {
    border-spacing: 4px;
  }
  .tableHeadCell {
    color: ${(p) => p.theme.palette.colors.Black};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0.168px;

    height: 44px;
    padding: 4px 8px;
    border-radius: 10px;
    background: ${(p) =>
      p.theme.palette.Palette['palette-primary-blue'][
        'palette-primary-blue-50'
      ]} !important;

    .MuiFormControl-root {
      align-items: center;
      padding: 4px 7px;
    }
  }
  .tableColumnCell {
    color: ${(p) => p.theme.palette.colors.Black};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0.168px;

    height: 67px;

    padding: 4px 8px;
    border-radius: 10px;
    background: ${(p) =>
      p.theme.palette.Palette['palette-primary-blue'][
        'palette-primary-blue-50'
      ]} !important;
  }
  .table-search-input {
    .MuiFormControl-root {
      height: 40px;
    }
    .MuiInputBase-root {
      height: 27px;
    }
    .MuiInputBase-root {
      fieldset {
        display: none;
      }
    }
  }
`;

const Head = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const HeadLeft = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

const HeadRight = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;
