import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export const useTime = () => {
  const [time, setTime] = useState(dayjs().format('HH:mm:ss'));

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(dayjs().format('HH:mm:ss'));
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return time;
};
