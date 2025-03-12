import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  createController,
  getControllerFullInfo,
} from '../../api/controllers/controllers';
import {
  IControllerReq,
  IControllerRes,
} from '../../api/controllers/controllers.types';

interface IInitialState extends IControllerRes {}

const initialState: IInitialState = {
  id: 0,
  name: '',
  created_at: '',
  created_by: '',
  state: [],
  address: '',
  groups: [],
  is_blocked: false,
  settings: {
    connection: {
      endpoints: [],
    },
    comment: '',
    updated_at: '',
    ignore_sensor_door_pp: false,
    ignore_sensor_door_shuno: false,
    ignore_sensor_fire: false,
    invert_sensor_door_pp: false,
    invert_sensor_door_shuno: false,
    invert_sensor_fire: false,
    manufacturer: {
      id: 0,
      name: '',
    },
    protocol_tag: '',
    updated_by: '',
    scheme_tag: '',
    scheme: {
      contactors: {
        evening: {
          enabled: false,
        },
        night: {
          enabled: false,
        },
      },
      fuses: {},
    },
  },
  is_deleted: false,
  oek_id: 0,
  in_exploitation: false,
  updated_at: '',
  updated_by: '',
};

// Получение контроллера
export const fetchControllerById = createAsyncThunk(
  'controller/item',
  async (id: string) => {
    const response = await getControllerFullInfo(id);
    return response.data as any;
  }
);

// Создание контроллера
export const createControllerThunk = createAsyncThunk(
  'controller/item',
  async (data: IControllerReq) => {
    createController(data);
    return;
  }
);

export const controllerSlice = createSlice({
  name: 'controller',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchControllerById.fulfilled, (state, { payload }) => {
      state = payload;
      return state;
    });
  },
});

export const {} = controllerSlice.actions;
