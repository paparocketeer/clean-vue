import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { IGetPasswordRulesRes } from '../../../types/profile';

export interface IValidationState extends IGetPasswordRulesRes {}

const initialState: IValidationState = {
  rules: {
    digits: 1,
    lowerCase: 1,
    maxLength: 1,
    minLength: 1,
    specialChars: 1,
    upperCase: 1,
  },
  generatedPasswordExample: '',
};

export const getPasswordRules = createAsyncThunk('password-rules', async () => {
  const data = await window.axiosInstanceProfile.get(`/password-rules`, {
    method: 'GET',
    withCredentials: false,
  });

  return data.data as IGetPasswordRulesRes;
});

export const validationSlice = createSlice({
  name: 'validation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPasswordRules.fulfilled, (state, { payload }) => {
      state = payload;

      return state;
    });
  },
});
