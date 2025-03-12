import {
  type PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { convertClassToObject } from 'src/shared/utils/convertClassToObject';

import { getControllersStatistic } from '../../api/controllers/controllers';
import {
  IControllersStatisticParams,
  IControllerStatisticRes,
  IControllerStatisticWS,
  ILocalGroupControllerItem,
} from '../../api/controllers/controllers.types';
import { DefaultPointObj } from './helpers';

interface IInitialState {
  isFilterEnable: boolean;
  selectedPoints: IControllerStatisticRes['items'];
  selectedPointsIds: {};
  points: Record<string, ILocalGroupControllerItem>;
  statistic: Omit<IControllerStatisticRes, 'items' | 'id'>;
}

const initialState: IInitialState = {
  isFilterEnable: false,
  selectedPoints: [],
  selectedPointsIds: {},
  points: {
    '0': convertClassToObject(new DefaultPointObj()),
  },
  statistic: {
    alarm: 0,
    evening: 0,
    fire_alarm: 0,
    door_open: 0,
    light_off: 0,
    night: 0,
    connected: 0,
    mode_autonomous: 0,
    mode_local: 0,
    mode_blocked: 0,
    total: 0,
    not_connected: 0,
    mode_teleaddress: 0,
  },
};

// Получение статистики по котроллерам в группе
export const fetchGroupByFilters = createAsyncThunk(
  'groups/items',
  async (params: IControllersStatisticParams) => {
    const response = await getControllersStatistic({
      ...params,
      group_id: isNaN(Number(params.group_id)) ? undefined : params.group_id,
    });

    if (!response.data.items) {
      return {
        ...response.data,
        items: [],
        id: params.group_id,
      } as any;
    }

    return {
      ...response.data,
      id: params.group_id,
    } as any;
  }
);

export const groupItemsSlice = createSlice({
  name: 'group_item',
  initialState,
  reducers: {
    onSelectPoints: (state, { payload }: PayloadAction<any>) => {
      state.selectedPoints.push(payload);
      state.selectedPointsIds[payload.id] = payload;
      return state;
    },
    onRemovePoint: (state, { payload }: PayloadAction<any>) => {
      state.selectedPoints = state.selectedPoints.filter(
        (el) => el.id !== payload.id
      );
      delete state.selectedPointsIds[payload.id];
      return state;
    },
    onClearPoints: (state) => {
      state.selectedPoints = [];
      state.selectedPointsIds = {};
      return state;
    },
    onSelectAll: (state, { payload }: PayloadAction<any>) => {
      payload.forEach((el) => {
        state.selectedPoints.push(el);
        state.selectedPointsIds[el.id] = el;
      });
      return state;
    },
    onUpdatePoints: (
      state,
      { payload }: PayloadAction<IControllerStatisticWS>
    ) => {
      if (state.isFilterEnable) {
        return state;
      }
      const { groups, ...point } = payload;
      const stateCopy: any = JSON.parse(JSON.stringify(state));
      groups.forEach((id) => {
        if (!stateCopy.points[`${id}`]) {
          stateCopy.points[`${id}`] = convertClassToObject(
            new DefaultPointObj()
          );
        }
        if (
          point.station_door_open ||
          point.cabinet_door_open ||
          point.line_failure ||
          point.outgoing_lines_alarm
        ) {
          stateCopy.points[`${id}`].warning[point.id] = point;
        }
        if (
          point.alarm ||
          point.fire_alarm ||
          point.input_alarm ||
          point.lamp_error
        ) {
          stateCopy.points[`${id}`].outExploitation[point.id] = point;
        }
        stateCopy.points[`${id}`].exploitation[point.id] = point;
      });

      return stateCopy;
    },
    switchFilter: (state, { payload }: PayloadAction<boolean>) => {
      state.isFilterEnable = payload;

      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGroupByFilters.fulfilled, (state, { payload }) => {
      let result = convertClassToObject(new DefaultPointObj());
      const { items, total, id, ...rest } = payload;

      result.total = total;
      result.items = payload.items;
      result.statistic = {
        ...rest,
        all: total,
      };

      items.forEach((el) => {
        if (
          el.station_door_open ||
          el.cabinet_door_open ||
          el.line_failure ||
          el.outgoing_lines_alarm ||
          el.lamp_error
        ) {
          result.warning[el.id] = el;
        }
        if (el.alarm || el.fire_alarm || el.input_alarm || el.lamp_error) {
          result.outExploitation[el.id] = el;
        }
        result.exploitation[el.id] = el;
      });

      state.points[id] = result;

      return state;
    });
  },
});

export const {
  onSelectPoints,
  onSelectAll,
  onRemovePoint,
  onClearPoints,
  onUpdatePoints,
  switchFilter,
} = groupItemsSlice.actions;
