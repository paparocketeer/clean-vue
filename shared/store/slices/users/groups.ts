import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { IGetUsersParams } from '../../../types/users';
import { IGetUsersGroupsResponse } from '../../../types/usersGroups';

interface IInitialState extends IGetUsersGroupsResponse {}

const initialState: IInitialState = {
  items: [],
  total: 0,
};

// Получение списка групп пользователей
export const fetchUsersGroupsList = createAsyncThunk(
  'usersGroups',
  async (params?: IGetUsersParams) => {
    const response = await window.axiosInstanceProfile({
      url: '/groups',
      method: 'GET',
      params,
    });
    return response.data as IGetUsersGroupsResponse;
  }
);

export const usersGroupsSlice = createSlice({
  name: 'usersGroups',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsersGroupsList.fulfilled, (state, { payload }) => {
      state = payload;
      return state;
    });
  },
});

export const {} = usersGroupsSlice.actions;
