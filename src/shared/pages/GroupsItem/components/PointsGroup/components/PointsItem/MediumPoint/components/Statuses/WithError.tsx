import styled from '@emotion/styled';
import { Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
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
import { IControllerStatisticRes } from 'src/shared/store/api/controllers/controllers.types';

import { titleColors } from '../../../constants';

export const WithError = ({
  alarm,
  lamp_error,
  station_door_open,
  cabinet_door_open,
  input_alarm,
  line_failure,
  fire_alarm,
  connected,
}: IControllerStatisticRes['items'][number]) => {
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
              color={input_alarm ? titleColors.gray : titleColors.red}
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
          title={
            station_door_open ? 'Дверь ШУНО открыта' : 'Дверь ШУНО закрыта'
          }
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
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 49.153px;
  padding: 4px;
  width: 32px;
  height: 32px;
`;

const StatusWrapper = styled(Box)`
  display: inline-grid;
  grid-template-columns: 32px 32px 32px 32px;
  padding: 6px;
  background: #eb5757;
  grid-row-gap: 6px;
  grid-column-gap: 3px;
  align-items: center;
`;
