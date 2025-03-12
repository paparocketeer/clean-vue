import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface IBreadcrumb {
  text: string;
  path: Url;
}

interface IInitialState {
  breadcrumbs: IBreadcrumb[];
}

const initialState: IInitialState = {
  breadcrumbs: [],
};

export const breadcrumbsSlice = createSlice({
  name: 'breadcrumbs',
  initialState,
  reducers: {
    onUpdateBreadcrumb(state, { payload }: PayloadAction<IInitialState>) {
      state.breadcrumbs = payload.breadcrumbs;
      return state;
    },
  },
});

export const { onUpdateBreadcrumb } = breadcrumbsSlice.actions;
