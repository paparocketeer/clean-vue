import React from 'react';
import { CityIcon, ColonIcon, DevIcon } from 'src/shared/icons';

import { iconBackgroundColors } from './colors';

export const groupData: Record<number, IGroupsItem> = {
  0: {
    name: 'Все',
    id: '0',
    icon: <CityIcon />,
    iconBackground: iconBackgroundColors.sky,
  },
  1: {
    name: 'Поклонная гора',
    id: '33',
    icon: <CityIcon />,
    iconBackground: iconBackgroundColors.sky,
  },
  2: {
    name: '1 ЭТР АО "Мосгорсвет"',
    id: '17',
    icon: <CityIcon />,
    iconBackground: iconBackgroundColors.sky,
  },
  3: {
    name: 'Кремль',
    id: '28',
    icon: <CityIcon />,
    iconBackground: iconBackgroundColors.sky,
  },
  4: {
    name: 'Зеленоград',
    id: '13',
    icon: <CityIcon />,
    iconBackground: iconBackgroundColors.sky,
  },
  5: {
    name: 'Западный РЭС',
    id: '14',
    icon: <CityIcon />,
    iconBackground: iconBackgroundColors.sky,
  },
  6: {
    name: 'Сколково',
    id: '30',
    icon: <CityIcon />,
    iconBackground: iconBackgroundColors.sky,
  },
  7: {
    name: 'Тестовые стенды (Инструменты разработчиков)',
    id: '6',
    icon: <DevIcon />,
    iconBackground: iconBackgroundColors.blue,
  },
  8: {
    name: 'Восточный РЭС',
    id: '9',
    icon: <CityIcon />,
    iconBackground: iconBackgroundColors.sky,
  },
  9: {
    name: 'АХП',
    id: '16',
    iconBackground: iconBackgroundColors.violet,
    icon: <ColonIcon />,
  },
  10: {
    name: '2,3 ЭТР АО "Мосгорсвет"',
    id: '19',
    icon: <CityIcon />,
    iconBackground: iconBackgroundColors.sky,
  },
  11: {
    name: 'ГОРМОСТ',
    id: '21',
    icon: <CityIcon />,
    iconBackground: iconBackgroundColors.sky,
  },
  12: {
    name: 'Северный РЭС',
    id: '1',
    icon: <CityIcon />,
    iconBackground: iconBackgroundColors.sky,
  },
  13: {
    name: 'Северо-Западный РЭС',
    id: '2',
    icon: <CityIcon />,
    iconBackground: iconBackgroundColors.sky,
  },
  14: {
    name: 'Южный РЭС',
    id: '3',
    icon: <CityIcon />,
    iconBackground: iconBackgroundColors.sky,
  },
  15: {
    name: 'Юго-Западный РЭС',
    id: '4',
    icon: <CityIcon />,
    iconBackground: iconBackgroundColors.sky,
  },
  16: {
    name: 'Юго-Восточный РЭС',
    id: '10',
    icon: <CityIcon />,
    iconBackground: iconBackgroundColors.sky,
  },
  17: {
    name: 'Северо-Восточный РЭС',
    id: '11',
    icon: <CityIcon />,
    iconBackground: iconBackgroundColors.sky,
  },
  18: {
    name: 'Троицкий и Новомосковский РЭС',
    id: '12',
    icon: <CityIcon />,
    iconBackground: iconBackgroundColors.sky,
  },
  19: {
    name: 'Спецобъекты',
    id: '35',
    icon: <CityIcon />,
    iconBackground: iconBackgroundColors.sky,
  },
  20: {
    name: 'Освещение МЭИ',
    id: '36',
    icon: <CityIcon />,
    iconBackground: iconBackgroundColors.sky,
  },
};

interface IGroupsItem {
  name: string;
  id: string;
  icon: React.ReactNode;
  iconBackground: string;
}
