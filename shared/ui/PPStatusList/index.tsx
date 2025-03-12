import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';

import {
  AccidentIcon,
  DoorIcon,
  DoubleDoorIcon,
  FireIcon,
  InputAccidentIcon,
  LampIcon,
  OnlineIcon,
  OutgoingLinesIcon,
} from '../../icons';
import { TStatusVariant } from '../../types/controlsNO';
import { Typography } from '../index';

interface IStatusProps {
  connect?: TStatusVariant;
  accident?: TStatusVariant;
  fire?: TStatusVariant;
  inputAccident?: TStatusVariant;
  outgoingLines?: TStatusVariant;
  lights?: TStatusVariant;
  openDoorSHUNO?: TStatusVariant;
  openDoorPP?: TStatusVariant;
  editMode?: boolean;
}
export const PPStatusList = ({
  lights,
  connect,
  outgoingLines,
  fire,
  accident,
  inputAccident,
  openDoorPP,
  openDoorSHUNO,
  editMode = false,
}: IStatusProps) => {
  const colorVariants: Record<TStatusVariant, string> = {
    inactive: '#B5B8BD',
    broken: '#EB5757',
    active: '#27AE60',
  };
  return (
    <Wrapper>
      <Item>
        <IconWrapper
          editMode={editMode}
          bgcolor={connect ? colorVariants[connect] : ''}>
          <OnlineIcon
            width={'48px'}
            height={'48px'}
          />
        </IconWrapper>
        <Typography variant={'caption.medium'}>
          Соединение <br /> установлено
        </Typography>
      </Item>
      <Item>
        <IconWrapper
          editMode={editMode}
          bgcolor={accident ? colorVariants[accident] : ''}>
          <AccidentIcon
            width={'48px'}
            height={'48px'}
          />
        </IconWrapper>
        <Typography variant={'caption.medium'}>Авария</Typography>
      </Item>
      <Item>
        <IconWrapper
          editMode={editMode}
          bgcolor={fire ? colorVariants[fire] : ''}>
          <FireIcon
            width={'48px'}
            height={'48px'}
          />
        </IconWrapper>
        <Typography variant={'caption.medium'}>Пожар</Typography>
      </Item>
      <Item>
        <IconWrapper
          editMode={editMode}
          bgcolor={inputAccident ? colorVariants[inputAccident] : ''}>
          <InputAccidentIcon
            width={'48px'}
            height={'48px'}
          />
        </IconWrapper>
        <Typography variant={'caption.medium'}>
          Авария <br /> на вводе
        </Typography>
      </Item>
      <Item>
        <IconWrapper
          editMode={editMode}
          bgcolor={outgoingLines ? colorVariants[outgoingLines] : ''}>
          <OutgoingLinesIcon
            width={'48px'}
            height={'48px'}
          />
        </IconWrapper>
        <Typography variant={'caption.medium'}>
          Отходящие <br /> линии
        </Typography>
      </Item>
      <Item>
        <IconWrapper
          editMode={editMode}
          bgcolor={lights ? colorVariants[lights] : ''}>
          <LampIcon
            width={'48px'}
            height={'48px'}
          />
        </IconWrapper>
        <Typography variant={'caption.medium'}>Светильники</Typography>
      </Item>
      <Item>
        <IconWrapper
          editMode={editMode}
          bgcolor={openDoorSHUNO ? colorVariants[openDoorSHUNO] : ''}>
          <DoorIcon
            width={'48px'}
            height={'48px'}
          />
        </IconWrapper>
        <Typography variant={'caption.medium'}>Дверь ШУНО</Typography>
      </Item>
      <Item>
        <IconWrapper
          editMode={editMode}
          bgcolor={openDoorPP ? colorVariants[openDoorPP] : ''}>
          <DoubleDoorIcon
            width={'48px'}
            height={'48px'}
          />
        </IconWrapper>
        <Typography variant={'caption.medium'}>Дверь ШУНО</Typography>
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 16px;
  border-radius: 16px;
  border: 1px solid #71b8ff;
  background: #fff;
`;

const Item = styled(Box)`
  display: flex;
  gap: 6px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const IconWrapper = styled(Box)<{ editMode: boolean }>`
  display: flex;
  width: 48px;
  height: 48px;
  padding: 11.873px 12px 12.127px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 333.28px;
  color: #ffffff;
  ${(p) =>
    p.editMode
      ? {
          color: '#B5B8BD',
          backgroundColor: '#B5B8BD',
        }
      : {}}
`;
