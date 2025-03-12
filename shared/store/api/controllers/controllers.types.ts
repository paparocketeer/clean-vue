import { b } from 'vitest/dist/reporters-1evA5lom';

import { IControllerGroup } from '../groups/groups.types';

export interface IControllersRes {
  total: number; // общее количество записей (не зависимо от ограничений limit/offset, если такие были указаны)
  items: {
    // контроллеры
    id: number; // идентификатор контроллера
    name: string; // название контроллера
    address: string; // адрес котроллера
    groups: string[]; // группы в которые входит контроллер
    blocked: boolean; // заблокирован ли контроллер
    is_connected: boolean; // есть ли связь
    is_mnemoscheme_compatible: boolean; // совпадает ли с мнемосхмой
    status: boolean; // эксплуатируется или нет
    manufacturer: string; // производитель
    hosts: string[]; // адреса подключения
    protocol: string; // протокол
    sim_cards: string[];
    Toir_id: number; // идентификатор ТОИР
    oek_id: number; // идентификатор ОЭК
    created_at: string; // дата создания
    created_by: string; // идентификатор создателя
  }[];
}
export interface IGetControllerParams {
  total?: number | string;
  offset?: number | string;
}

export interface IControllersStatisticParams {
  search?: string; //-  поиск котроллеров по id котроллера и адресу
  short?: boolean; // - получнение статистики без списка котроллеров,для обновления параметровь в заголовке
  group_id?: number | string; // - фильтр по группе
  offset?: number;
  limit?: number;
  alarm?: boolean; //фильтр Авария
  loght_off?: boolean; // - свет выключен
  evening?: boolean; //- контактор вечер свет горит
  night?: boolean; //- контактор ночь свет горит
  fire_alarm?: boolean; // - пожар
  door_open?: boolean; //- дверь открыта
  connected?: boolean; //- на связи
  not_connected?: boolean; // - не на связи
  blocked?: boolean; //- заблокирован
  autonomous?: boolean; // - режим автономный
  teleaddress?: boolean; //- нежим телеадресный
  local?: boolean; //- режим локальный
  in_exploitation?: boolean; // - в эксплуатации
  input_alarm?: boolean; //- авария на вводе
  out_goinglines_alarm?: boolean; // - отходящие линиии
  cabinet_door_open?: boolean; //- открытая дверь шуно
  station_door_open?: boolean; // - открытая дверь ПП
  line_failure?: boolean; //- авария на линии
  lamp_error?: boolean; //- ошибка на лампе
  evening_cont_state?: boolean; // - Ночь
  night_cont_state?: boolean; //- Вечер
}

export interface IControllerStatisticRes {
  id: string;
  total: number; // Все (всего записей в выбранной группе)
  light_off: number; // Отключено
  night: number; // Ночь
  evening: number; // Вечер
  fire_alarm: number; // Пожар
  door_open: number; // Дверь
  alarm: number; // Авария
  connected: number; // На связи
  not_connected: number; // Нет связи
  mode_autonomous: number; // Автономный
  mode_blocked: number; // Заблокировано
  mode_teleaddress: number; // Телеадресный
  mode_local: number; // Локальный
  items: IControllerStatisticItem[];
}

export interface IControllerStatisticItem {
  id: number;
  name: string;
  groups: number[];
  address: string;
  contactor_amount: number;
  dont_disable: boolean;
  dont_enable: boolean;
  control_lock: boolean;
  in_exploitation: boolean;
  connected: boolean;
  alarm: boolean;
  fire_alarm: boolean;
  input_alarm: boolean;
  outgoing_lines_alarm: boolean;
  cabinet_door_open: boolean;
  station_door_open: boolean;
  line_failure: boolean;
  lamp_error: boolean;
  evening_cont_state: boolean;
  night_cont_state: boolean;
}

export interface IExecControllerCommandParams {
  ctl_ids: number[]; // список id котроллеров
  command: 'switch_mode' | 'switch_light' | 'reset_fire_sensor'; // команда,список будет расширяться
  params: {
    contactor?: 'all' | 'night' | 'evening'; // контактор
    mode?:
      | 'undefined'
      | 'autonomous'
      | 'teleaddress'
      | 'cascade'
      | 'control_lock';
    state?: 'on' | 'off';
  }; // параметры в зависимости от команды
}

export interface ILocalGroupControllerItem {
  total: number;
  items: IControllerStatisticRes['items'];
  statistic: Omit<IControllerStatisticRes, 'items' | 'id'>;

  warning: Record<number, IControllerStatisticRes['items'][number]>;
  outExploitation: Record<number, IControllerStatisticRes['items'][number]>;
  exploitation: Record<number, IControllerStatisticRes['items'][number]>;
}

export interface IControllerStatisticWS extends IControllerStatisticItem {
  groups: number[];
}

export interface IControllerReq {
  name: string; // название котроллера
  address: string; // адресс котроллера
  groups: number[]; // id групп к которым пренадлежит котроллер;
  manufacturer_id: number; // id производителя котроллера
  in_exploitation: boolean; // указывает в эксплуатации котроллер или нет
  oek_id?: number; // or number
  scheme_tag: string; // tag/идентификатор используемого шаблона мнемонической схемы
  protocol_tag: string; // tag/идентификатор используемого шаблона схемы протокола
  connection: {
    // информация для подключения котроллера
    endpoints: IEndpoint[];
  };
  scheme: IMnemoScheme; // мнемоническая схема
  invert_sensor_fire: boolean; // установки инвертирования значений датчиков  котроллера
  invert_sensor_door_shuno: boolean; // установки инвертирования значений датчиков  котроллера
  invert_sensor_door_pp: boolean; // установки инвертирования значений датчиков  котроллера
  ignore_sensor_fire: boolean; // установки игнорирования значений датчиков  котроллера
  ignore_sensor_door_shuno: boolean; // установки игнорирования значений датчиков  котроллера
  ignore_sensor_door_pp: boolean; // установки игнорирования значений датчиков  котроллера
  comment?: string; // коментарии
}
export interface IControllerRes {
  id: number;
  name: string;
  address: string;
  groups: IControllerGroup[];
  in_exploitation: boolean; // is controller in exploitation
  is_blocked: boolean;
  is_deleted: boolean;
  oek_id?: number; // null or number
  created_at: string;
  created_by: string;
  updated_at?: string; //or time
  updated_by?: string; // or string
  settings: {
    manufacturer: {
      id: number;
      name: string;
    };
    invert_sensor_fire: boolean;
    invert_sensor_door_shuno: boolean;
    invert_sensor_door_pp: boolean;
    ignore_sensor_fire: boolean;
    ignore_sensor_door_shuno: boolean;
    ignore_sensor_door_pp: boolean;
    scheme_tag: string;
    scheme: IMnemoScheme;
    protocol_tag: string;
    connection: {
      endpoints: IEndpoint[];
    };
    comment?: string; // or string
    updated_at?: string; // or time
    updated_by?: string; // or string
  };
  state: IControllerStateItem[];
}

export interface IEndpoint {
  host: string;
  port: number;
  sim_number: string;
}
export interface IControllerStateItem {
  key: string; // variable tag
  value_type: number; // variable value type
  value: boolean; // variable value
}

export interface IMnemoScheme {
  fuses: {
    A: IMnemoSchemeFuse[];
    B: IMnemoSchemeFuse[];
    C: IMnemoSchemeFuse[];
  };
  contactors: {
    night: {
      enabled: boolean;
    };
    evening: {
      enabled: boolean;
    };
  };
  input_phase: {
    night: IMnemoSchemePhase[];
    evening: IMnemoSchemePhase[];
  };
}

export interface IMnemoSchemeFuse {
  number: number;
  contactor: 'unused' | 'night' | 'evening' | 'reserved';
}

export interface IMnemoSchemePhase {
  phase: string;
  enabled: boolean;
}
