import { createSelector } from '@reduxjs/toolkit';

export const selectProfile = (state: RootState) => state.profile;

export const selectFIO = createSelector([selectProfile], (profile) => {
  let fio = '';
  if (profile.firstName) {
    fio = profile.firstName;
  }
  if (profile.lastName) {
    fio = `${fio} ${profile.lastName}`;
  }
  return fio;
});

export const selectSFIO = createSelector([selectProfile], (profile) => {
  let fio = '';
  if (profile.firstName) {
    fio = profile.firstName[0];
  }
  if (profile.lastName) {
    fio = `${fio}${profile.lastName[0]}`;
  }
  return fio;
});
