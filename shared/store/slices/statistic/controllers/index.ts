import {
  type PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

interface IGetGroupStatisticResponse {
  items: any;
  total: number;
}

interface IInitialState extends IGetGroupStatisticResponse {}

// Получение статистики по контроллерам
export const fetchStatisticControllers = createAsyncThunk(
  'statistic_controllers',
  async () => {
    const response = await window.axiosInstance.get(`/controllers/statistic`, {
      method: 'GET',
      withCredentials: false,
    });

    return response.data as IGetGroupStatisticResponse;
  }
);

const initialState: IInitialState = {
  total: 0,
  items: [],
};

export const statisticControllersSlice = createSlice({
  name: 'statistic_controllers',
  initialState,
  reducers: {
    setControllersStatistic: (
      state,
      { payload }: PayloadAction<IGetGroupStatisticResponse>
    ) => {
      return payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchStatisticControllers.fulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export const { setControllersStatistic } = statisticControllersSlice.actions;
