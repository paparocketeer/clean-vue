import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import React, { useEffect, useState } from 'react';

import { Typography } from '../Typography';

const marks = [
  {
    value: 1,
    label: (
      <Typography
        bold
        variant={'title.small'}>
        1 мин.
      </Typography>
    ),
  },
  {
    value: 15,
    label: (
      <Typography
        bold
        variant={'title.small'}>
        15 мин
      </Typography>
    ),
  },
  {
    value: 30,
    label: (
      <Typography
        bold
        variant={'title.small'}>
        30 мин
      </Typography>
    ),
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}
interface ITimeSliderProps {
  getTime: Function;
  time?: number;
}
export const TimeSlider = ({ getTime, time = 1 }: ITimeSliderProps) => {
  const [innerTime, setInnerTime] = useState(time);
  useEffect(() => {
    setInnerTime(time);
  }, [time]);
  return (
    <SWrapper>
      <Slider
        defaultValue={1}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
        aria-label='Time'
        value={innerTime}
        sx={{
          margin: '0',
          marginTop: '14px',
          padding: '15px !important',
          width: '80%',
          '.MuiSlider-markLabel': {
            top: '-15px',
          },
          '.MuiSlider-rail': {
            color: '#EAEBEB',
          },
          '.MuiSlider-mark': {
            display: 'none',
          },
          '& [data-index="0"][aria-hidden="true"]': {
            left: '8% !important',
            top: '-15px !important',
          },
          '& [data-index="1"]': {
            top: '-15px !important',
          },
          '& [data-index="2"]': {
            left: '90% !important',
            top: '-15px !important',
          },
        }}
        step={1}
        max={30}
        min={1}
        onChange={(e, value) => {
          getTime(value);
          setInnerTime(Number(value));
        }}
        marks={marks}
      />
    </SWrapper>
  );
};

const SWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
