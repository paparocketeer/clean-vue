import { OnChangeFn } from '@tanstack/react-table';
import { PaginationState } from '@tanstack/table-core/src/features/RowPagination';
import { useSearchParams } from 'react-router-dom';

import {
  onUpdatePagination,
  selectPagination,
} from '../store/slices/utils/pagination';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

export const usePagination = (name: string, totalItems: number) => {
  const [getSearchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const pagination = useAppSelector((state) => selectPagination(state));

  const handleChangePagination: OnChangeFn<PaginationState> = (value) => {
    const obj = {};
    for (const entry of (getSearchParams as any).entries()) {
      const [param, value] = entry;
      obj[param] = value;
    }

    //@ts-ignore
    if (value.pageIndex && value.pageSize) {
      //@ts-ignore
      setSearchParams({
        ...obj,
        [`${name}-pageIndex`]: (value as any).pageIndex,
        [`${name}-pageSize`]: (value as any).pageSize,
      });
      dispatch(
        onUpdatePagination({
          pageIndex: (value as any).pageIndex,
          pageSize: (value as any).pageSize,
        })
      );
    }
  };

  return {
    pagination,
    handleChangePagination,
    total: totalItems,
    totalPages: Math.floor(totalItems / pagination.pageSize),
  };
};
