import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import { useTime } from 'src/shared/hooks/useTime';

export const CurrentDate = () => {
  const { full, short } = useMemo(() => {
    const full = dayjs().format('DD.MM.YYYY');
    const short = dayjs().format('dd');
    return { full, short };
  }, []);
  const time = useTime();

  return (
    <>
      {full} ({short}) {time}
    </>
  );
};
