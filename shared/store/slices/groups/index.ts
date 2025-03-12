import {
  type PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

import {
  getControllersGroups,
  getControllersGroupsStatistic,
} from '../../api/groups/groups';
import {
  IControllerGroupStatisticRes,
  TLocalGroupItem,
} from '../../api/groups/groups.types';

interface IInitialState {
  total: number;
  groups: Record<number, TLocalGroupItem>;
  statistic: Omit<IControllerGroupStatisticRes, 'groups'>;
}

// Получение статистики по группам
export const fetchGroups = createAsyncThunk('groups', async () => {
  const groupsStatistic = await getControllersGroupsStatistic();

  const groups = await getControllersGroups();

  return { groups: groups.data, groupsStatistic: groupsStatistic.data };
});

const initialState: IInitialState = {
  groups: {},
  statistic: {
    cabinet_door_open: 0,
    alarm: 0,
    cable_lines: 0,
    connected: 0,
    controllers: 0,
    fire_alarm: 0,
    in_exploitation: 0,
    input_alarm: 0,
    lamp_error: 0,
    line_failure: 0,
    not_connected: 0,
    objects: 0,
    not_in_exploitation: 0,
    outgoing_lines_alarm: 0,
    station_door_open: 0,
    without_error: 0,
    all: 0,
  },
  total: 0,
};

export const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    setStatistic: (state, { payload }: PayloadAction<any>) => {
      const stateCopy: any = JSON.parse(JSON.stringify(state));

      const { groups, ...rest } = payload;

      stateCopy.total = groups.total;
      stateCopy.statistic = {
        ...rest,
        all: groups.total,
      };

      groups.forEach((i) => {
        const item = state.groups[i.id];

        stateCopy.groups[i.id] = {
          ...item,
          ...i,
          iconBackground: '#00CED1',
        };
      });

      return stateCopy;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGroups.fulfilled, (state, { payload }) => {
      const { groups, ...rest } = payload.groupsStatistic;

      const newGroups = payload.groups.items.reduce((prev, curr) => {
        const item = groups.find((el) => el.id === curr.id);
        prev[curr.id] = {
          ...curr,
          ...item,
          iconBackground: '#00CED1',
        };
        return prev as IInitialState['groups'];
      }, {});

      state.total = payload.groups.total;
      state.statistic = {
        ...rest,
        all: payload.groups.total,
      };
      state.groups = newGroups;

      return state;
    });
  },
});

export const { setStatistic } = groupsSlice.actions;
