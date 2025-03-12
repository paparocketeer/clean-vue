import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  compactView: boolean;
  withAccidents: boolean;
  withGroupName: boolean;
}

const initialState: IInitialState = {
  compactView: false,
  withAccidents: false,
  withGroupName: false,
};

export const groupsSettingSlice = createSlice({
  name: 'groups_setting',
  initialState,
  reducers: {
    onCompactView(state, { payload }: PayloadAction<BoolPayload>) {
      state.compactView = payload.status;
      return state;
    },
    onWithAccidents(state, { payload }: PayloadAction<BoolPayload>) {
      state.withAccidents = payload.status;
      return state;
    },
    onWithGroupName(state, { payload }: PayloadAction<BoolPayload>) {
      state.withGroupName = payload.status;
      return state;
    },
  },
});

export const { onWithAccidents, onWithGroupName, onCompactView } =
  groupsSettingSlice.actions;
