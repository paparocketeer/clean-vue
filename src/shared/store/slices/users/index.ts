import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  IGetFullUserResponse,
  IGetUsersParams,
  IGetUsersResponse,
  IUpdateUser,
} from '../../../types/users';

interface IInitialState {
  list: IGetUsersResponse;
  user: IGetFullUserResponse;
}

const initialState: IInitialState = {
  list: {
    total: 0,
    items: [],
  },
  user: {
    id: '',
    user: '',
    attributes: [],
    meta: {
      department: '',
    },
    comment: '',
    company: '',
    created_at: '',
    email: '',
    fullname: '',
    phone: '',
    roles: [],
    position: '',
    permanent_blocked: false,
    psw_need_to_change: false,
  },
};

// Получение списка ползователей
export const fetchUsersList = createAsyncThunk(
  'users',
  async (params?: IGetUsersParams) => {
    const response = await window.axiosInstanceProfile({
      url: '/users',
      method: 'GET',
      params,
    });
    return response.data as IGetUsersResponse;
  }
);

// Получение пользователя
export const fetchUserItem = createAsyncThunk(
  'users-item',
  async (data?: { id: string }) => {
    const response = await window.axiosInstanceProfile({
      url: `/users/${data?.id}`,
      method: 'GET',
    });
    return response.data as IGetFullUserResponse;
  }
);

// Создание ползователя
export const createUser = createAsyncThunk(
  'users-create',
  async (data: IUpdateUser, { rejectWithValue }) => {
    try {
      const response = await window.axiosInstanceProfile({
        url: '/users',
        method: 'POST',
        data,
      });
      return response.data as IGetUsersResponse['items'][number];
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Изменение данных пользователя
export const editUser = createAsyncThunk(
  'users-edit',
  async (
    { id, data }: { id: string; data: IUpdateUser },
    { rejectWithValue }
  ) => {
    try {
      const response = await window.axiosInstanceProfile({
        url: `/users/${id}`,
        method: 'PATCH',
        data,
      });

      return response.data as IGetUsersResponse['items'][number];
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Перманентная блокировка пользователя
export const blockUser = createAsyncThunk(
  'user-block',
  async ({ id }: { id: string }) => {
    window.axiosInstanceProfile({
      url: `/users/${id}/permanent`,
      method: 'POST',
    });
    return id;
  }
);

// Снятие перманентной блокировки
export const unBlockUser = createAsyncThunk(
  'user-unblock',
  async ({ id }: { id: string }) => {
    window.axiosInstanceProfile({
      url: `/users/${id}/permanent-unblock`,
      method: 'POST',
    });
    return id;
  }
);

// Выход из системы
export const logOutUser = createAsyncThunk(
  'user-unBlock',
  async ({ id }: { id: string }) => {
    window.axiosInstanceProfile({
      url: `/users/${id}/logout`,
      method: 'POST',
    });
    return id;
  }
);

// Удаление пользователя
export const deleteUser = createAsyncThunk(
  'user-delete',
  async ({ id }: { id: string }) => {
    window.axiosInstanceProfile({
      url: `/users/${id}`,
      method: 'DELETE',
    });
    return id;
  }
);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsersList.fulfilled, (state, { payload }) => {
      state.list = payload;
      return state;
    });
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      state.list.items = [payload, ...state.list.items];
      return state;
    });
    builder.addCase(editUser.fulfilled, (state, { payload }) => {
      state.list.items = [payload, ...state.list.items];
      return state;
    });
    builder.addCase(blockUser.fulfilled, (state, { payload }) => {
      const item = state.list.items.find((el) => el.id === payload);
      if (item) {
        item.permanent_blocked = true;
      }
      return state;
    });
    builder.addCase(unBlockUser.fulfilled, (state, { payload }) => {
      const item = state.list.items.find((el) => el.id === payload);
      if (item) {
        item.permanent_blocked = false;
      }
      return state;
    });
    builder.addCase(deleteUser.fulfilled, (state, { payload }) => {
      state.list.items = state.list.items.filter((el) => el.id !== payload);

      return state;
    });
    builder.addCase(fetchUserItem.fulfilled, (state, { payload }) => {
      state.user = payload;

      return state;
    });
  },
});

export const {} = usersSlice.actions;
