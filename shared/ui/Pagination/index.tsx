import styled from '@emotion/styled';
import { Pagination as MuiPagination } from '@mui/material';
import Box from '@mui/material/Box';
import { PaginationProps } from '@mui/material/Pagination/Pagination';
import React from 'react';

import { defaultFooterCount, footerList } from '../../../constants/footerList';
import { usePagination } from '../../hooks/usePagination';
import { TextSelect } from '../base/Select';
import { Typography } from '../base/Typography';
import { InputButton } from '../InputButton';

interface IPagination extends PaginationProps {
  name: string;
  total: number;
  onChange?: (pageIndex, pageSize) => void;
}

export const Pagination = ({ name, total, onChange, ...rest }: IPagination) => {
  const { handleChangePagination, pagination, totalPages } = usePagination(
    name,
    total
  );

  const pageSize = pagination?.pageSize
    ? String(pagination?.pageSize)
    : defaultFooterCount;

  return (
    <Wrapper>
      <MuiPagination
        count={Math.round(total / Number(pageSize))}
        page={pagination.pageIndex}
        onChange={(e, p) => {
          onChange?.(p, pagination.pageSize);

          handleChangePagination({
            pageIndex: p,
            pageSize: pagination.pageSize,
          });
        }}
        {...rest}
      />
      <TextSelect
        defaultValue={
          pagination?.pageSize
            ? String(pagination?.pageSize)
            : defaultFooterCount
        }
        text={'Показывать по'}
        onChange={(i) => {
          onChange?.(pagination.pageIndex, Number(i.id));

          handleChangePagination({
            pageIndex: pagination.pageIndex,
            pageSize: Number(i.id),
          });
        }}
        list={footerList}
      />
      <Typography
        style={{ margin: '0 16px', userSelect: 'none' }}
        variant={'body.large'}
        color={'Accent.Primary'}>
        из {totalPages || 1} страниц
      </Typography>
      <InputButton
        handeAccept={(c) => {
          onChange?.(Number(c), pagination.pageSize);

          handleChangePagination({
            pageIndex: Number(c),
            pageSize: pagination.pageSize,
          });
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;

  border-top: 1px solid ${(p) => p.theme.palette.Accent.Primary};
  padding: 10px;
`;
