import React, { useEffect } from 'react';

import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { usePagination } from '../../../../hooks/usePagination';
import { selectBreadcrumbs } from '../../../../store/selectors/breadcrumbs';
import {
  selectUsers,
  selectUsersList,
} from '../../../../store/selectors/users';
import { fetchUsersList } from '../../../../store/slices/users';
import { paginationId } from '../../constants';
/*
import { useSearchParams } from 'react-router-dom';

import { tabVariantId } from '../../constants';
import { First } from './components/FIrst';
import { Second } from './components/Second';
*/
import { Third } from './components/Third';

/*const tabVariants = {
  1: First,
  2: Second,
  3: Third,
};*/

export const Content = () => {
  const dispatch = useAppDispatch();
  const userList = useAppSelector((state) => selectUsersList(state));

  const { pagination } = usePagination(paginationId, userList.total);

  const state = useAppSelector((state) => selectUsers(state));

  useEffect(() => {
    dispatch(
      fetchUsersList({
        size: pagination.pageSize,
        page: pagination.pageIndex,
      })
    );
  }, []);

  // const [getSearchParams] = useSearchParams();
  // const id = Number(getSearchParams.get(tabVariantId)) || 2;
  // const Variant = tabVariants[id as any];

  return <Third list={state.list} />;
};
