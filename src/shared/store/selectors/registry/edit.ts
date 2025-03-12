import { createSelector } from '@reduxjs/toolkit';

export const selectRegistryEdit = (state: RootState) => state.registry_edit;

export const selectRegistryControllers = createSelector(
  [selectRegistryEdit],
  (registry) => {
    return registry.controllers;
  }
);
