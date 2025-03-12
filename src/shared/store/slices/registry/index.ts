import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getControllers } from 'src/shared/store/api/controllers/controllers';
import { IControllersRes } from 'src/shared/store/api/controllers/controllers.types';

interface IInitialState {
  controllers: IControllersRes;
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
    total: 0,
    items: [],
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

// Получение реестров контроллеров
export const getControllersList = createAsyncThunk(
  'registry-controllers-get',
  async (params: { offset?: number | string; limit?: number | string }) => {
    const { data } = await getControllers(params);

    return data;
  }
);

export const registrySlice = createSlice({
  name: 'registry',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getControllersList.fulfilled, (state, { payload }) => {
      state.controllers = payload;

      return state;
    });
  },
});

export const {} = registrySlice.actions;
