import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = (state: RootState) => state.users;

export const selectUsersList = createSelector(
  [selectUsers],
  (profile) => profile.list
);
export const selectUserById = createSelector(
  [selectUsers],
  (profile) => profile.user
);
