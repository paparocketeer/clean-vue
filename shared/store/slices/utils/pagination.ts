import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPagination {
  pageIndex: number;
  pageSize: number;
}

const initialState: IPagination = {
  pageIndex: 1,
  pageSize: 10,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    onUpdatePagination(state, { payload }: PayloadAction<IPagination>) {
      state.pageSize = payload.pageSize;
      state.pageIndex = payload.pageIndex;
      return state;
    },
  },
  selectors: {
    selectPagination: (state) => state,
  },
});

export const { onUpdatePagination } = paginationSlice.actions;

export const { selectPagination } = paginationSlice.selectors;
