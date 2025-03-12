import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePath } from 'src/shared/hooks/usePath';
import { CalendarIcon } from 'src/shared/icons/Calendar';
import { Typography } from 'src/shared/ui';

import { CurrentDate } from './components/CurrentDate';

export const Date = () => {
  const path = usePath();
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Item>
        <Typography
          variant={'body.large'}
          bold>
          <CurrentDate />
        </Typography>
      </Item>
      <Item>
        Включение &nbsp;
        <Typography
          variant={'body.large'}
          bold>
          08:00:00
        </Typography>
      </Item>
      <Item>
        Отключение &nbsp;
        <Typography
          variant={'body.large'}
          bold>
          19:20:00
        </Typography>
      </Item>
      <Item>
        ср. осв.
        <Typography
          variant={'body.large'}
          bold>
          &nbsp;100&nbsp;
        </Typography>
        лк
      </Item>
      <ScheduleBtn
        sx={{ textTransform: 'none' }}
        onClick={() => {
          navigate(path.protectedPaths.utility.schedule.index());
        }}>
        <CalendarIcon
          style={{
            marginRight: '4px',
          }}
        />
        <Typography variant={'body.large'}>Расписание</Typography>
      </ScheduleBtn>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  background: #e7f1ff;
  padding: 4px;
  height: 40px;
  gap: 8px;
  border-radius: 50px;
`;

const Item = styled.div`
  background: white;
  padding: 8px 16px;
  height: 32px;
  align-items: center;
  border-radius: 50px;
  display: flex;
`;

const ScheduleBtn = styled(Button)(() => ({
  backgroundColor: '#ffffff',
  borderRadius: '50px',
  color: '#000000',
  padding: '8px 16px',
}));
