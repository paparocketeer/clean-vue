import React from 'react';
import { Pagination } from 'src/shared/ui';

import { useAppSelector } from '../../../../hooks/useAppSelector';
import { selectUsersList } from '../../../../store/selectors/users';
import { fetchUsersList } from '../../../../store/slices/users';
import { paginationId } from '../../constants';

export const Footer = () => {
  const userList = useAppSelector((state) => selectUsersList(state));

  return (
    <Pagination
      onChange={(pageIndex, pageSize) => {
        fetchUsersList({
          size: pageSize,
          page: pageIndex,
        });
      }}
      total={userList.total}
      name={paginationId}
    />
  );
};
