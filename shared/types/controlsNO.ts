type TFuseVariant = 'active' | 'broken' | 'editor' | 'inactive' | 'problem';
type TStatusVariant = 'active' | 'broken' | 'inactive';
type TContactorVariant = 'evening' | 'night';
type TLightsObjectsKeys =
  | 'empty' // пустой объект
  | 'objects' // Объекта
  | 'in_exploitation' // В эксплуатации
  | 'not_in_exploitation' //Выведено из эксплуатации
  | 'connected' // На связи
  | 'cable_lines' // Кабельные линии
  | 'controllers' // Контроллеры
  | 'without_error' // Без ошибок
  | 'not_connected' // Не на связи
  | 'alarm' // Авария
  | 'fire_alarm' // Пожар
  | 'input_alarm' // Авария на вводе
  | 'outgoing_lines_alarm' // Отходящие линии
  | 'cabinet_door_open' // Открытая дверь ШУНО
  | 'station_door_open' // Открытая дверь ШУНО
  | 'line_failure' // Авария на линии
  | 'lamp_error'; // Ошибка на лампе;

export type {
  TContactorVariant,
  TFuseVariant,
  TLightsObjectsKeys,
  TStatusVariant,
};
