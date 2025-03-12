import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { useAppSelector } from 'src/shared/hooks/useAppSelector';
import { selectGroupsSetting } from 'src/shared/store/selectors/setting/groups';
import { Typography } from 'src/shared/ui';
import { WithContent } from 'src/shared/utils/WithContent';

import {
  IControllerGroupStatisticRes,
  TLocalGroupItem,
} from '../../../../store/api/groups/groups.types';
import { selectGroups } from '../../../../store/selectors/groups';
import { LightObjectsGroupTable } from './components/LightObjectsGroupTable';
import { LightObjectsTable } from './components/LightObjectsTable';

interface ICompactView {
  data?: Record<number, TLocalGroupItem>;
}

export const CompactView = ({ data }: ICompactView) => {
  const { statistic } = useAppSelector((state) => selectGroups(state));

  const { withGroupName } = useAppSelector((state) =>
    selectGroupsSetting(state)
  );

  return (
    <Wrapper
      sx={{
        gap: withGroupName ? '0' : '10px',
      }}>
      <WithContent isShow={!withGroupName}>
        <Head>
          <Typography
            bold
            variant={'title.large'}>
            Все объекты
          </Typography>
        </Head>
      </WithContent>
      <LightObjectsTable
        info={statistic}
        withGroupName={!withGroupName}
        keys={
          !withGroupName
            ? [
                'objects',
                'in_exploitation',
                'not_in_exploitation',
                'connected',
                'not_connected',
                'alarm',
                'fire_alarm',
                'input_alarm',
                'outgoing_lines_alarm',
                'cabinet_door_open',
                'station_door_open',
                'empty',
              ]
            : [
                'objects',
                'in_exploitation',
                'not_in_exploitation',
                'connected',
                'not_connected',
                'alarm',
                'fire_alarm',
                'input_alarm',
                'outgoing_lines_alarm',
                'cabinet_door_open',
                'station_door_open',
                'cable_lines',
                'line_failure',
                'controllers',
                'without_error',
                'lamp_error',
              ]
        }
      />
      <WithContent isShow={!withGroupName}>
        <Head>
          <Typography
            bold
            variant={'title.large'}>
            Контроль кабельных линий и светильников
          </Typography>
        </Head>
      </WithContent>
      <WithContent isShow={!withGroupName}>
        <LightObjectsTable
          info={statistic}
          withGroupName={!withGroupName}
          keys={[
            'cable_lines',
            'line_failure',
            'controllers',
            'without_error',
            'lamp_error',
            'empty',
            'empty',
            'empty',
          ]}
        />
      </WithContent>
      <WithContent isShow={!withGroupName}>
        <Head>
          <Typography
            bold
            variant={'title.large'}>
            Все группы объектов
          </Typography>
        </Head>
      </WithContent>
      <LightObjectsGroupTable data={data} />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const Head = styled(Box)`
  display: flex;
  border-radius: 100px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  padding: 6px;
`;
