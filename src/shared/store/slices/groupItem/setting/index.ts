import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  compactView: boolean;
  withControlPanel: boolean;
  withMap: boolean;
  withJournal: boolean;
  withAddresses: boolean;
}

const initialState: IInitialState = {
  compactView: true,
  withControlPanel: false,
  withMap: false,
  withJournal: true,
  withAddresses: true,
};

export const groupsItemSettingSlice = createSlice({
  name: 'group_item_setting',
  initialState,
  reducers: {
    onCompactView(state, { payload }: PayloadAction<BoolPayload>) {
      state.compactView = payload.status;
      return state;
    },
    onWithJournal(state, { payload }: PayloadAction<BoolPayload>) {
      state.withJournal = payload.status;
      return state;
    },
    onWithMap(state, { payload }: PayloadAction<BoolPayload>) {
      state.withMap = payload.status;
      return state;
    },
    onWithControlPanel(state, { payload }: PayloadAction<BoolPayload>) {
      state.withControlPanel = payload.status;
      return state;
    },
    onWithAddresses(state, { payload }: PayloadAction<BoolPayload>) {
      state.withAddresses = payload.status;
      return state;
    },
  },
});

export const {
  onWithControlPanel,
  onWithAddresses,
  onWithJournal,
  onWithMap,
  onCompactView,
} = groupsItemSettingSlice.actions;
