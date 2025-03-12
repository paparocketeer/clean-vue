import { useEffect, useState } from 'react';

import { fetchControllerById } from '../store/slices/controller';
import { fetchGroupByFilters, onUpdatePoints } from '../store/slices/groupItem';
import { fetchGroups, setStatistic } from '../store/slices/groups';
import { useAppDispatch } from './useAppDispatch';
import { useNotification } from './useNotification';

const messageTypes = {
  group_statistics: 'group_statistics',
  controller_statistics: 'controller_statistics',
};

export const useSubscriber = () => {
  const { showNoty } = useNotification();
  const dispatch = useAppDispatch();
  const [isConnectedError, setIsConnectedError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchGroups());

    const interval = setInterval(() => {
      dispatch(fetchGroups());
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  /*useEffect(() => {


    setIsLoading(true);

    const wSocket = new WebSocket(
      `wss://iiusno-dev.maxima.ru/ws?jwt=${(window as any).accessToken}`
    );

    wSocket.addEventListener('error', () => {
      showNoty({
        variant: 'info',
        message: 'Ошибка подключения к серверу',
      });
      setIsLoading(false);
      setIsConnectedError(true);
    });

    wSocket.addEventListener('open', () => {
      setIsConnectedError(false);
      setIsLoading(false);
    });

    wSocket.addEventListener('close', () => {
      showNoty({
        variant: 'info',
        message: 'Подключение к серверу закрыто',
      });
      setIsConnectedError(false);
      setIsLoading(false);
    });

    wSocket.addEventListener('message', (e) => {
      const { tag, data } = JSON.parse(e.data) as {
        tag: keyof typeof messageTypes;
        data: any;
      };
      switch (tag) {
        case 'controller_statistics':
          dispatch(onUpdatePoints(data));

          return;
        case 'group_statistics':
          dispatch(setStatistic(data));
          return;
        default:
          return {};
      }
    });

    return () => {
      wSocket.close();
      setIsLoading(false);
    };
  }, []);*/

  return { isConnectedError, isLoading };
};
