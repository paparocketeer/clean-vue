import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { IGetRolesResponse } from '../../../types/roles';
import { IGetUsersParams } from '../../../types/users';
import { IGetUsersGroupsResponse } from '../../../types/usersGroups';

interface IInitialState extends IGetRolesResponse {}

const initialState: IInitialState = {
  items: [],
  total: 0,
};

// Получение ролей пользователей
export const fetchRolesList = createAsyncThunk(
  'roles',
  async (params?: IGetUsersParams) => {
    const response = await window.axiosInstanceProfile({
      url: '/roles',
      method: 'GET',
      params,
    });
    return response.data as IGetRolesResponse;
  }
);

export const rolesSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRolesList.fulfilled, (state, { payload }) => {
      state = payload;
      return state;
    });
  },
});
