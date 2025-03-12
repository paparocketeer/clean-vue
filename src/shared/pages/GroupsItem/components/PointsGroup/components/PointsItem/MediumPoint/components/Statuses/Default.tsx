import styled from '@emotion/styled';
import { Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { IControllerStatisticRes } from 'src/shared/store/api/controllers/controllers.types';
import {
  AccidentIcon,
  ClosedDoorIcon,
  ClosedDoubleDoorIcon,
  FireIcon,
  InputAccidentIcon,
  LampIcon,
  OfflineIcon,
  OutgoingLinesIcon,
} from 'src/shared/icons';

import { useGetConstants } from '../../../useGetConstants';

export const Default = ({
  alarm,
  lamp_error,
  station_door_open,
  cabinet_door_open,
  input_alarm,
  line_failure,
  fire_alarm,
  connected,
}: IControllerStatisticRes['items'][number]) => {
  const { titleColors } = useGetConstants();

  return (
    <StatusWrapper>
      <IconContainer>
        <Tooltip
          title={
            input_alarm ? 'Есть напряжение на вводе' : 'Нет напряжения на вводе'
          }
          placement={'top'}>
          <IconWrapper>
            <InputAccidentIcon
              width={20}
              height={20}
              color={!input_alarm ? titleColors.red : titleColors.gray}
            />
          </IconWrapper>
        </Tooltip>
      </IconContainer>
      <IconContainer>
        <Tooltip
          title={connected ? 'На связи' : 'Нет связи'}
          placement={'top'}>
          <IconWrapper>
            <OfflineIcon
              width={20}
              height={20}
              color={connected ? titleColors.gray : titleColors.red}
            />
          </IconWrapper>
        </Tooltip>
      </IconContainer>
      <IconContainer>
        <Tooltip
          title={
            cabinet_door_open ? 'Дверь ШУНО открыта' : 'Дверь ШУНО закрыта'
          }
          placement={'top'}>
          <IconWrapper>
            <ClosedDoorIcon
              width={20}
              height={20}
              color={cabinet_door_open ? titleColors.red : titleColors.gray}
            />
          </IconWrapper>
        </Tooltip>
      </IconContainer>
      <IconContainer>
        <Tooltip
          title={fire_alarm ? 'Пожар' : 'Нет пожара'}
          placement={'top'}>
          <IconWrapper>
            <FireIcon
              width={20}
              height={20}
              color={fire_alarm ? titleColors.red : titleColors.gray}
            />
          </IconWrapper>
        </Tooltip>
      </IconContainer>
      <IconContainer>
        <Tooltip
          title={line_failure ? 'Авария на линии' : 'Линии в норме'}
          placement={'top'}>
          <IconWrapper>
            <OutgoingLinesIcon
              width={20}
              height={20}
              color={line_failure ? titleColors.red : titleColors.gray}
            />
          </IconWrapper>
        </Tooltip>
      </IconContainer>
      <IconContainer>
        <Tooltip
          title={lamp_error ? 'Ошибка на лампе' : 'Лампы в норме'}
          placement={'top'}>
          <IconWrapper>
            <LampIcon
              width={20}
              height={20}
              color={lamp_error ? titleColors.red : titleColors.gray}
            />
          </IconWrapper>
        </Tooltip>
      </IconContainer>
      <IconContainer>
        <Tooltip
          title={station_door_open ? 'Дверь ШУНО открыта' : 'Дверь ШУНО закрыта'}
          placement={'top'}>
          <IconWrapper>
            <ClosedDoubleDoorIcon
              width={20}
              height={20}
              color={station_door_open ? titleColors.red : titleColors.gray}
            />
          </IconWrapper>
        </Tooltip>
      </IconContainer>
      <IconContainer>
        <Tooltip
          title={alarm ? 'Межфазное замыкание' : 'Фазы в норме'}
          placement={'top'}>
          <IconWrapper>
            <AccidentIcon
              width={20}
              height={20}
              color={alarm ? titleColors.red : titleColors.gray}
            />
          </IconWrapper>
        </Tooltip>
      </IconContainer>
    </StatusWrapper>
  );
};

const IconContainer = styled(Box)`
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled(Box)`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
`;

const StatusWrapper = styled(Box)`
  display: inline-grid;
  grid-template-columns: 32px 32px 32px 32px;
  padding: 6px;
  grid-column-gap: 3px;
  grid-row-gap: 4px;
  background: #ffffff;
  align-items: center;
`;
