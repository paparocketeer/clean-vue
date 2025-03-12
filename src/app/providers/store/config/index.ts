import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';
import { breadcrumbsSlice } from 'src/shared/store/slices/breadcrumbs';
import { controllerSlice } from 'src/shared/store/slices/controller';
import { groupItemsSlice } from 'src/shared/store/slices/groupItem';
import { groupsItemSettingSlice } from 'src/shared/store/slices/groupItem/setting';
import { groupsSlice } from 'src/shared/store/slices/groups';
import { groupsSettingSlice } from 'src/shared/store/slices/groups/setting';
import { profileSlice } from 'src/shared/store/slices/profile';
import { registrySlice } from 'src/shared/store/slices/registry';
import { registryEditSlice } from 'src/shared/store/slices/registry/edit';
import { statisticControllersSlice } from 'src/shared/store/slices/statistic/controllers';
import { usersSlice } from 'src/shared/store/slices/users';
import { paginationSlice } from 'src/shared/store/slices/utils/pagination';
import { validationSlice } from '../../../../shared/store/slices/utils/validation';
import { usersGroupsSlice } from '../../../../shared/store/slices/users/groups';
import { rolesSlice } from '../../../../shared/store/slices/users/roles';

enableMapSet();

export const rootReducer = combineReducers({
  // Utils
  [paginationSlice.reducerPath]: paginationSlice.reducer,
  // Group Controllers
  [groupItemsSlice.reducerPath]: groupItemsSlice.reducer,
  [groupsItemSettingSlice.reducerPath]: groupsItemSettingSlice.reducer,
  // Groups
  [groupsSlice.reducerPath]: groupsSlice.reducer,
  [groupsSettingSlice.reducerPath]: groupsSettingSlice.reducer,
  // Controller
  [controllerSlice.reducerPath]: controllerSlice.reducer,
  // Profile
  [profileSlice.reducerPath]: profileSlice.reducer,
  // Breadcrumbs
  [breadcrumbsSlice.reducerPath]: breadcrumbsSlice.reducer,
  // Statistic
  [statisticControllersSlice.reducerPath]: statisticControllersSlice.reducer,
  // Users
  [usersSlice.reducerPath]: usersSlice.reducer,
  [usersGroupsSlice.reducerPath]: usersGroupsSlice.reducer,
  [rolesSlice.reducerPath]: rolesSlice.reducer,
  // Registry
  [registrySlice.reducerPath]: registrySlice.reducer,
  // Registry edit
  [registryEditSlice.reducerPath]: registryEditSlice.reducer,
  // Utils
  [validationSlice.reducerPath]: validationSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true, composeWithDevTools: true }),
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
