import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getControllerFullInfo } from 'src/shared/store/api/controllers/controllers';

interface IInitialState {
  controllers: any;
  objects: {
    total: 0;
    items: any[];
  };
  supports: {
    total: 0;
    items: any[];
  };
}

const initialState: IInitialState = {
  controllers: {
    id: 0,
    address: '',
    blocked: false,
    groups: [],
    name: '',
    is_connected: false,
    is_mnemoscheme_compatible: false,
    isBlocked: false,
    manufacturer: {
      id: 0,
      name: '',
      created_at: '',
    },
    ms_pp_id: 0,
    scheme: {
      input: {
        A: {
          power_overload_alarm: false,
          breaker_input_phase: false,
          input_feed_phase: false,
          input_feed_phase_alaram: false,
        },
        C: {
          power_overload_alarm: false,
          breaker_input_phase: false,
          input_feed_phase: false,
          input_feed_phase_alaram: false,
        },
        B: {
          power_overload_alarm: false,
          breaker_input_phase: false,
          input_feed_phase: false,
          input_feed_phase_alaram: false,
        },
      },
      fuses: {
        A: [],
        C: [],
        B: [],
      },
      contactors: {
        state: {},
        contactors: {
          evening: {
            indication_mode: 1,
            alarm: false,
            phase: {
              A: {
                cont_output_phase: false,
                cont_control: false,
                cont_state: false,
              },
              B: {
                cont_output_phase: false,
                cont_control: false,
                cont_state: false,
              },
              C: {
                cont_output_phase: false,
                cont_control: false,
                cont_state: false,
              },
            },
          },
          indications: {
            cabinet_alarm: false,
            controller_alarm: false,
            cabinet_door_alarm: false,
            fire_alarm: false,
            station_door_alarm: false,
          },
        },
        indication_mode: 0,
        created_at: '',
        created_by: '',
        settings: {
          InvertSensorFire: false,
          InvertSensorDoorShuno: false,
          InvertSensorDoorPP: false,
          IgnoreSensorFire: false,
          IgnoreSensorDoorShuno: false,
          IgnoreSensorDoorPP: false,
          Comment: '',
          CreatedAt: '', // date
          CreatedBy: '', // name
          UpdatedAt: '', // date
          UpdatedBy: '', // name
        },
        updated_at: '',
        updated_by: '',
      },
    },
    protocol: {
      endpoints: [],
    },
    status: false,
    version: 0,
  },
  objects: {
    total: 0,
    items: [],
  },
  supports: {
    total: 0,
    items: [],
  },
};

// Получение полной информации о контроллере
export const getControllersList = createAsyncThunk(
  'registry-controllers-edit',
  async (id?: string | number) => {
    const { data } = await getControllerFullInfo(id || '');

    return data;
  }
);

export const registryEditSlice = createSlice({
  name: 'registry_edit',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getControllersList.fulfilled, (state, { payload }) => {
      state.controllers = payload;

      return state;
    });
  },
});

export const {} = registryEditSlice.actions;
