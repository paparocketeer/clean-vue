import { useContext } from 'react';

import { NotificationContext } from '../../app/providers/notification';
import { INotificationProps } from '../ui';

export const useNotification = () => {
  const { setOptions } = useContext(NotificationContext);

  const handleNotify = (options: INotificationProps, timeout = 2000) => {
    setOptions({
      ...options,
      open: true,
    });

    setTimeout(() => {
      setOptions({
        ...options,
        open: false,
      });
    }, timeout);
  };
  return { showNoty: handleNotify };
};
