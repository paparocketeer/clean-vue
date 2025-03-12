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
              width={12}
              height={12}
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
              width={12}
              height={12}
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
              width={12}
              height={12}
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
              width={12}
              height={12}
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
              width={12}
              height={12}
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
              width={12}
              height={12}
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
              width={12}
              height={12}
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
              width={12}
              height={12}
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
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled(Box)`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 3px;
`;

const StatusWrapper = styled(Box)`
  display: inline-grid;
  grid-template-columns: 20px 20px 20px 20px;
  padding: 4px;
  grid-column-gap: 7.2px;
  grid-row-gap: 4px;
  background: #ffffff;
  align-items: center;
`;
