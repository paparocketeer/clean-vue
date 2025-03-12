import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { KeycloakProfile } from 'keycloak-js';

import { IUpdateProfile } from '../../../types/profile';

const initialState: KeycloakProfile = {
  attributes: {},
  email: '',
  emailVerified: false,
  id: '',
  firstName: '',
  lastName: '',
  username: '',
};

// Изменение данных пользователя
export const updateProfile = createAsyncThunk(
  'profile-update',
  async ({ id, data }: { id: string; data: IUpdateProfile }) => {
    await window.axiosInstanceProfile.get(`/users/${id}/partial`, {
      method: 'PATCH',
      withCredentials: false,
      data,
    });

    return data as IUpdateProfile;
  }
);

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    onUpdateProfile(state, { payload }: PayloadAction<KeycloakProfile>) {
      state = payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateProfile.fulfilled, (state, { payload }) => {
      return state;
    });
  },
});

export const { onUpdateProfile } = profileSlice.actions;
