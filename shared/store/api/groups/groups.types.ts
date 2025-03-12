export interface IGetControllersGroupsRes {
  total: number; // общее количество записей (не зависимо от ограничений limit/offset, если такие были указаны)
  items: IControllerGroup[]; // группы контроллеров
}

export interface IControllerGroup {
  id: number; // идентификатор группы
  name: string; // название группы
  type: string; // тип группы
  priority: number; // приоритет группы
}

export interface IControllerGroupStatisticRes {
  objects: number; // Объекта
  in_exploitation: number; // В эксплуатации
  not_in_exploitation: number; // Выведено из эксплуатации
  connected: number; // На связи
  cable_lines: number; // Кабельные линии
  controllers: number; // Контроллеры
  without_error: number; // Без ошибок
  not_connected: number; // Не на связи
  alarm: number; // Авария
  fire_alarm: number; // Пожар
  input_alarm: number; // Авария на вводе
  outgoing_lines_alarm: number; // Отходящие линии
  cabinet_door_open: number; // Открытая дверь ШУНО
  station_door_open: number; // Открытая дверь ПП
  line_failure: number; // Авария на линии
  lamp_error: number; // Ошибка на лампе
  all: number; // Ошибка на лампе
  groups: IGroupStatisticItem[];
}

export interface IGroupStatisticItem {
  id: number;
  name: string; // Название группы
  in_exploitation: number;
  not_in_exploitation: number;
  not_connected: number;
  alarm: number;
  fire_alarm: number;
  input_alarm: number;
  outgoing_lines_alarm: number;
  cabinet_door_open: number;
  station_door_open: number;
  line_failure: number;
  lamp_error: number;
}

export type TLocalGroupItem = IGroupStatisticItem &
  IControllerGroup & {
    width: number | string;
    iconBackground: string;
  };
