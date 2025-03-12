import React, { useEffect, useRef } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useAppDispatch } from 'src/shared/hooks/useAppDispatch';
import {
  fetchGroupByFilters,
  switchFilter,
} from 'src/shared/store/slices/groupItem';
import { TabsVar4 } from 'src/shared/ui/Tabs/TabsVar4';

import { statusFilterId } from '../../../../constants';

const intervalTimeout = 30000;

export const StatusTabs = () => {
  const dispatch = useAppDispatch();
  const idInterval = useRef<any>();
  const [getSearchParams] = useSearchParams();

  const { groupId } = useParams();

  const fetchData = async (id, search) => {
    if (id === 'all') {
      await dispatch(
        fetchGroupByFilters({
          group_id: groupId,
          search: search || '',
        })
      );
      await dispatch(switchFilter(false));
    } else {
      await dispatch(
        fetchGroupByFilters({
          group_id: groupId,
          [id]: true,
          search: search || '',
        })
      );
      await dispatch(switchFilter(true));
    }
  };

  useEffect(() => {
    const aTab = getSearchParams.get(statusFilterId);
    console.log(aTab);

    return () => {
      clearInterval(idInterval.current);
    };
  }, []);

  return (
    <TabsVar4
      onChange={(id, search) => {
        fetchData(id, search).then(() => {
          clearInterval(idInterval.current);
          idInterval.current = setInterval(() => {
            fetchData(id, search);
          }, intervalTimeout);
        });
      }}
      name={statusFilterId}
      items={[
        {
          label: 'Все',
          id: 'all',
        },
        {
          label: 'Отключено',
          id: 'light_off',
        },
        {
          label: 'Вечер',
          id: 'evening',
        },
        {
          label: 'Ночь',
          id: 'night',
        },
        {
          label: 'Пожар',
          id: 'fire_alarm',
        },
        {
          label: 'Дверь',
          id: 'door_open',
        },
        {
          label: 'Авария',
          id: 'alarm',
        },
        {
          label: 'Нет связи',
          id: 'not_connected',
        },
        {
          label: 'Автономный',
          id: 'mode_autonomous',
        },
        {
          label: 'Блокировано',
          id: 'mode_blocked',
        },
      ]}
    />
  );
};
