import React from 'react';
import {
  AccidentIcon,
  AccidentOnLineIcon,
  ControllerIcon,
  DoorIcon,
  DoubleDoorIcon,
  FireIcon,
  InputAccidentIcon,
  LampIcon,
  LinesIcon,
  ObjectsIcon,
  OffLampIcon,
  OfflineIcon,
  OnlineIcon,
  OperationIcon,
  OutgoingLinesIcon,
  OutOperationIcon,
} from 'src/shared/icons';

import { TLightsObjectsKeys } from '../../../types/controlsNO';
import { colorVariants } from '../components/FullView/components/LightObjectsList/components/Item';

interface IList {
  variant: keyof typeof colorVariants;
  text: string;
  icon?: React.ReactElement;
}

export const GroupsList: Record<TLightsObjectsKeys, IList> = {
  objects: {
    text: 'Объекты',
    variant: 'green',
    icon: <ObjectsIcon />,
  },
  in_exploitation: {
    text: 'В эксплуатации',
    icon: <OperationIcon />,
    variant: 'green',
  },
  not_in_exploitation: {
    text: 'Выведено из эксплуатации',
    icon: <OutOperationIcon />,
    variant: 'gray',
  },
  connected: {
    text: 'На связи',
    icon: <OnlineIcon />,
    variant: 'green',
  },
  not_connected: {
    text: 'Не на связи',
    icon: <OfflineIcon />,
    variant: 'red',
  },
  alarm: {
    text: 'Авария',
    icon: <AccidentIcon />,
    variant: 'red',
  },
  fire_alarm: {
    text: 'Пожар',
    icon: <FireIcon />,
    variant: 'red',
  },
  input_alarm: {
    text: 'Авария на вводе',
    icon: <InputAccidentIcon />,
    variant: 'red',
  },
  outgoing_lines_alarm: {
    text: 'Отходящие линии',
    icon: <OutgoingLinesIcon />,
    variant: 'red',
  },
  cabinet_door_open: {
    text: 'Открытая дверь ШУНО',
    icon: <DoorIcon />,
    variant: 'red',
  },
  station_door_open: {
    text: 'Дверь 1',
    icon: <DoubleDoorIcon />,
    variant: 'red',
  },
  cable_lines: {
    text: 'Кабельные линии',
    icon: <LinesIcon />,
    variant: 'green',
  },
  line_failure: {
    text: 'Авария на линии',
    icon: <AccidentOnLineIcon />,
    variant: 'red',
  },
  controllers: {
    text: 'Контроллеры',
    icon: <ControllerIcon />,
    variant: 'green',
  },
  without_error: {
    text: 'Без ошибок',
    icon: <LampIcon />,
    variant: 'green',
  },
  lamp_error: {
    text: 'Ошибка на лампе',
    icon: <OffLampIcon />,
    variant: 'red',
  },
  empty: {
    text: '',
    variant: 'red',
  },
};
