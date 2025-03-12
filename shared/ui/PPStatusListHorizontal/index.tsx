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

type TSize = 'small' | 'large';
interface IStatusProps {
  connect: TStatusVariant;
  accident: TStatusVariant;
  fire: TStatusVariant;
  inputAccident: TStatusVariant;
  outgoingLines: TStatusVariant;
  lights: TStatusVariant;
  openDoorSHUNO: TStatusVariant;
  openDoorPP: TStatusVariant;
  size?: TSize;
}
export const PPStatusListHorizontal = ({
  lights,
  connect,
  outgoingLines,
  fire,
  accident,
  inputAccident,
  openDoorPP,
  openDoorSHUNO,
  size = 'small',
}: IStatusProps) => {
  const iconSize: Record<TSize, string> = {
    large: '56px',
    small: '48px',
  };
  const colorVariants: Record<TStatusVariant, string> = {
    inactive: '#B5B8BD',
    broken: '#EB5757',
    active: '#27AE60',
  };
  return (
    <Wrapper>
      <Item>
        <IconWrapper
          size={size}
          bgcolor={colorVariants[connect]}>
          <OnlineIcon
            width={iconSize[size]}
            height={iconSize[size]}
          />
        </IconWrapper>
        <Typography variant={'caption.medium'}>
          Соединение <br /> установлено
        </Typography>
      </Item>
      <Item>
        <IconWrapper
          size={size}
          bgcolor={colorVariants[accident]}>
          <AccidentIcon
            width={iconSize[size]}
            height={iconSize[size]}
          />
        </IconWrapper>
        <Typography variant={'caption.medium'}>Авария</Typography>
      </Item>
      <Item>
        <IconWrapper
          size={size}
          bgcolor={colorVariants[fire]}>
          <FireIcon
            width={iconSize[size]}
            height={iconSize[size]}
          />
        </IconWrapper>
        <Typography variant={'caption.medium'}>Пожар</Typography>
      </Item>
      <Item>
        <IconWrapper
          size={size}
          bgcolor={colorVariants[inputAccident]}>
          <InputAccidentIcon
            width={iconSize[size]}
            height={iconSize[size]}
          />
        </IconWrapper>
        <Typography variant={'caption.medium'}>
          Авария <br /> на вводе
        </Typography>
      </Item>
      <Item>
        <IconWrapper
          size={size}
          bgcolor={colorVariants[outgoingLines]}>
          <OutgoingLinesIcon
            width={iconSize[size]}
            height={iconSize[size]}
          />
        </IconWrapper>
        <Typography variant={'caption.medium'}>
          Отходящие <br /> линии
        </Typography>
      </Item>
      <Item>
        <IconWrapper
          size={size}
          bgcolor={colorVariants[lights]}>
          <LampIcon
            width={iconSize[size]}
            height={iconSize[size]}
          />
        </IconWrapper>
        <Typography variant={'caption.medium'}>Светильники</Typography>
      </Item>
      <Item>
        <IconWrapper
          size={size}
          bgcolor={colorVariants[openDoorSHUNO]}>
          <DoorIcon
            width={iconSize[size]}
            height={iconSize[size]}
          />
        </IconWrapper>
        <Typography variant={'caption.medium'}>Дверь ШУНО</Typography>
      </Item>
      <Item>
        <IconWrapper
          size={size}
          bgcolor={colorVariants[openDoorPP]}>
          <DoubleDoorIcon
            width={iconSize[size]}
            height={iconSize[size]}
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
  justify-content: center;
  align-items: start;
  gap: 16px;
`;

const Item = styled(Box)`
  display: flex;
  gap: 6px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const IconWrapper = styled(Box)<{ size: TSize }>`
  display: flex;
  width: ${(p) => (p.size === 'large' ? '56px' : '48px')};
  height: ${(p) => (p.size === 'large' ? '56px' : '48px')};
  padding: 11.873px 12px 12.127px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 333.28px;
  color: #ffffff;
`;
