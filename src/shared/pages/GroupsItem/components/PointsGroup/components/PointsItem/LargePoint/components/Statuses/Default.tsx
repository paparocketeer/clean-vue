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

interface IDefaultProps {
  inputAccident: boolean;
  connected: boolean;
  closedDoor: boolean;
  fire: boolean;
  outLines: boolean;
  lamp: boolean;
  closedDDoor: boolean;
  accident: boolean;
}

export const Default = ({
  connected,
  inputAccident,
  accident,
  lamp,
  fire,
  outLines,
  closedDoor,
  closedDDoor,
}: IDefaultProps) => {
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
              width={32}
              height={32}
              color={!inputAccident ? titleColors.red : titleColors.gray}
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
              width={32}
              height={32}
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
              width={32}
              height={32}
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
              width={32}
              height={32}
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
              width={32}
              height={32}
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
              width={32}
              height={32}
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
              width={32}
              height={32}
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
              width={32}
              height={32}
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
  padding: 12px;
  grid-column-gap: 23px;
  grid-row-gap: 12px;
  background: #ffffff;
  align-items: center;
`;
