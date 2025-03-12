import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IInitialState {}

const initialState: any = {
  id: 0,
  name: '',
  manufacturer: {
    id: 0,
    name: '',
    created_at: '',
  },
  groups: [],
  address: '',
  blocked: false,
  protocol: {
    endpoints: [],
  },
  is_connected: false,
  ms_pp_id: 0,
  status: false,
  version: 0,
  is_mnemoscheme_compatible: false,
  scheme: {
    input: {
      A: {
        power_overload_alarm: false, // optional
        input_feed_phase_alaram: false, // optional
        input_feed_phase: false, // optional
        breaker_input_phase: false, // optional
      },
      B: {
        power_overload_alarm: false, // optional
        input_feed_phase_alaram: false, // optional
        input_feed_phase: false, // optional
        breaker_input_phase: false, // optional
      },
      C: {
        power_overload_alarm: false, // optional
        input_feed_phase_alaram: false, // optional
        input_feed_phase: false, // optional
        breaker_input_phase: false, // optional
      },
    },
    fuses: {
      A: [
        {
          number: 0,
          contactor: '',
          fuse_out: false, // optional
          fuse_presense: false, // optional
          fuse_alarm: false, // optional
        },
      ],
      B: [
        {
          number: 0,
          contactor: '',
          fuse_out: false, // optional
          fuse_presense: false, // optional
          fuse_alarm: false, // optional
        },
      ],
      C: [
        {
          number: 0,
          contactor: '',
          fuse_out: false, // optional
          fuse_presense: false, // optional
          fuse_alarm: false, // optional
        },
      ],
    },
    contactors: {
      indication_mode: 0, // optional
      contactors: {
        // optional
        evening: {
          indication_mode: 0,
          alarm: false,
          phase: {
            A: {
              cont_output_phase: false,
              cont_state: false,
              cont_control: false,
            },
            B: {
              cont_output_phase: false,
              cont_state: false,
              cont_control: false,
            },
            C: {
              cont_output_phase: false,
              cont_state: false,
              cont_control: false,
            },
          },
        },
        indications: {
          cabinet_alarm: false, // optional
          controller_alarm: false, // optional
          cabinet_door_alarm: false, // optional
          station_door_alarm: false, // optional
          fire_alarm: false,
        },
      },
      settings: {
        // depends on version of controller
        InvertSensorFire: false,
        InvertSensorDoorShuno: false,
        InvertSensorDoorPP: false,
        IgnoreSensorFire: false,
        IgnoreSensorDoorShuno: false,
        IgnoreSensorDoorPP: false,
        Comment: '',
        CreatedAt: '',
        CreatedBy: '',
        UpdatedAt: '',
        UpdatedBy: '',
      },
      state: {}, // optional depends on controller version
      created_at: '',
      created_by: '',
      updated_at: '',
      updated_by: '',
    },
  },
};

// Получение статистики по группам
export const fetchControllerById = createAsyncThunk(
  'controller/item',
  async (id?: string) => {
    const response = await window.axiosInstance.get(`/controllers/${id}`, {
      method: 'GET',
      withCredentials: false,
    });
    return response.data as any;
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
