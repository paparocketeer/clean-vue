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

import { useGetConstants } from '../../../useGetConstants';

interface IWithErrorProps {
  inputAccident: boolean;
  connected: boolean;
  closedDoor: boolean;
  fire: boolean;
  outLines: boolean;
  lamp: boolean;
  closedDDoor: boolean;
  accident: boolean;
}

export const WithError = ({
  closedDDoor,
  closedDoor,
  lamp,
  fire,
  outLines,
  accident,
  inputAccident,
  connected,
}: IWithErrorProps) => {
  const { titleColors } = useGetConstants();

  return (
    <StatusWrapper>
      <IconContainer>
        <Tooltip
          title={
            inputAccident
              ? 'Есть напряжение на вводе'
              : 'Нет напряжения на вводе'
          }
          placement={'top'}>
          <IconWrapper>
            <InputAccidentIcon
              width={24}
              height={24}
              color={inputAccident ? titleColors.gray : titleColors.red}
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
              width={24}
              height={24}
              color={connected ? titleColors.gray : titleColors.red}
            />
          </IconWrapper>
        </Tooltip>
      </IconContainer>
      <IconContainer>
        <Tooltip
          title={closedDoor ? 'Дверь ШУНО открыта' : 'Дверь ШУНО закрыта'}
          placement={'top'}>
          <IconWrapper>
            <ClosedDoorIcon
              width={24}
              height={24}
              color={closedDoor ? titleColors.red : titleColors.gray}
            />
          </IconWrapper>
        </Tooltip>
      </IconContainer>
      <IconContainer>
        <Tooltip
          title={fire ? 'Пожар' : 'Нет пожара'}
          placement={'top'}>
          <IconWrapper>
            <FireIcon
              width={24}
              height={24}
              color={fire ? titleColors.red : titleColors.gray}
            />
          </IconWrapper>
        </Tooltip>
      </IconContainer>
      <IconContainer>
        <Tooltip
          title={outLines ? 'Авария на линии' : 'Линии в норме'}
          placement={'top'}>
          <IconWrapper>
            <OutgoingLinesIcon
              width={24}
              height={24}
              color={outLines ? titleColors.red : titleColors.gray}
            />
          </IconWrapper>
        </Tooltip>
      </IconContainer>
      <IconContainer>
        <Tooltip
          title={lamp ? 'Ошибка на лампе' : 'Лампы в норме'}
          placement={'top'}>
          <IconWrapper>
            <LampIcon
              width={24}
              height={24}
              color={lamp ? titleColors.red : titleColors.gray}
            />
          </IconWrapper>
        </Tooltip>
      </IconContainer>
      <IconContainer>
        <Tooltip
          title={closedDDoor ? 'Дверь ШУНО открыта' : 'Дверь ШУНО закрыта'}
          placement={'top'}>
          <IconWrapper>
            <ClosedDoubleDoorIcon
              width={24}
              height={24}
              color={closedDDoor ? titleColors.red : titleColors.gray}
            />
          </IconWrapper>
        </Tooltip>
      </IconContainer>
      <IconContainer>
        <Tooltip
          title={accident ? 'Межфазное замыкание' : 'Фазы в норме'}
          placement={'top'}>
          <IconWrapper>
            <AccidentIcon
              width={24}
              height={24}
              color={accident ? titleColors.red : titleColors.gray}
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
  border-radius: 100px;
  padding: 4px;
  width: 40px;
  height: 40px;
`;

const StatusWrapper = styled(Box)`
  display: inline-grid;
  grid-template-columns: 40px 40px 40px 40px;
  padding: 8px;
  background: #eb5757;
  grid-row-gap: 8px;
  grid-column-gap: 15px;
  align-items: center;
`;
