import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import React, { useRef, useState } from 'react';
import { PowerIcon } from 'src/shared/icons';
import { TimeSlider } from 'src/shared/ui/base/TimeSlider';
import { Typography } from 'src/shared/ui/base/Typography';

const baseTime = dayjs().set('minutes', 15).set('seconds', 0);
interface ITimeControllerProps {
  height?: string;
  btnSize: 'small' | 'medium' | 'large';
}
export const TimeController = ({ height, btnSize }: ITimeControllerProps) => {
  const [selectedTime, selectTime] = useState(baseTime);
  const [time, setTime] = useState(baseTime);
  const timerRef = useRef<any>();

  const resetTime = () => {
    let innerTime = selectedTime;
    if (timerRef) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      innerTime = innerTime.subtract(1, 'second');
      setTime(innerTime);
      if (innerTime.minute() === 0 && innerTime.second() === 0) {
        clearInterval(timerRef.current);
      }
    }, 1000);
  };

  return (
    <Wrapper>
      <Inner
        sx={{
          height,
        }}>
        <TimeSlider
          time={time.minute()}
          getTime={(val) => {
            selectTime(dayjs().set('minutes', val).set('seconds', 0));
          }}
        />
        <Counter>
          <Typography variant={'body.medium'}>Осталось времени</Typography>
          <Typography
            variant={'body.medium'}
            color={'alert.alert-gray'}>
            00:{time.format('mm:ss')}
          </Typography>
        </Counter>
      </Inner>
      <Button
        size={btnSize}
        disabled
        style={{
          padding: '10px 16px',
        }}
        startIcon={<PowerIcon />}
        onClick={() => {
          resetTime();
        }}
        variant={'contained'}>
        Включить кратковременно
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const Inner = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 260px;
  width: 100%;
`;

const Counter = styled(Box)`
  padding: 6px 8px;
  justify-content: space-between;
  display: flex;
  width: 100%;
`;
