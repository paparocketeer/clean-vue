import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { useAppSelector } from 'src/shared/hooks/useAppSelector';
import { selectGroupsSetting } from 'src/shared/store/selectors/setting/groups';
import { Typography } from 'src/shared/ui';
import { WithContent } from 'src/shared/utils/WithContent';

import { TLocalGroupItem } from '../../../../store/api/groups/groups.types';
import { selectGroups } from '../../../../store/selectors/groups';
import { LightObjectsGroupList } from './components/LightObjectsGroupList';
import { LightObjectsList } from './components/LightObjectsList';

interface IFullViewProps {
  data?: Record<number, TLocalGroupItem>;
}

export const FullView = ({ data }: IFullViewProps) => {
  const { statistic } = useAppSelector((state) => selectGroups(state));

  const { withGroupName, withAccidents } = useAppSelector((state) =>
    selectGroupsSetting(state)
  );
  const variants = {
    onAccidents: {
      one: {
        title: 'Все объекты без аварий',
        keys: [
          'objects',
          'in_exploitation',
          'not_in_exploitation',
          'connected',
          'cable_lines',
          'controllers',
          'without_error',
        ],
      },
      two: {
        title: 'Все объекты с авариями',
        keys: [
          'not_connected',
          'alarm',
          'fire_alarm',
          'input_alarm',
          'outgoing_lines_alarm',
          'cabinet_door_open',
          'station_door_open',
          'line_failure',
          'lamp_error',
        ],
      },
    },
    offAccidents: {
      one: {
        title: 'Все объекты',
        keys: [
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
        ],
      },
      two: {
        title: 'Контроль кабельных линий и светильников',
        keys: [
          'cable_lines',
          'line_failure',
          'controllers',
          'without_error',
          'lamp_error',
        ],
      },
    },
  } as const;

  const currentVariant = withAccidents
    ? variants.onAccidents
    : variants.offAccidents;

  return (
    <>
      <WithContent isShow={!withGroupName}>
        <Head>
          <Typography
            variant={'title.large'}
            bold>
            {currentVariant.one.title}
          </Typography>
        </Head>
      </WithContent>
      <LightObjectsList
        withAccidents={withAccidents}
        info={statistic}
        keys={currentVariant.one.keys as any}
      />
      <WithContent isShow={!withGroupName}>
        <Head>
          <Typography
            variant={'title.large'}
            bold>
            {currentVariant.two.title}
          </Typography>
        </Head>
      </WithContent>
      <LightObjectsList
        withAccidents={withAccidents}
        info={statistic}
        keys={currentVariant.two.keys as any}
      />
      <WithContent isShow={!withGroupName}>
        <Head>
          <Typography
            variant={'title.large'}
            bold>
            Все группы объектов
          </Typography>
        </Head>
      </WithContent>
      <LightObjectsGroupList data={data} />
    </>
  );
};

const Head = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 100px;
  height: 40px;
  padding: 8px 6px;
`;
