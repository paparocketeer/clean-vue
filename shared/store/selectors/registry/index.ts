import { createSelector } from '@reduxjs/toolkit';

export const selectRegistry = (state: RootState) => state.registry;

export const selectRegistryControllers = createSelector(
  [selectRegistry],
  (registry) => {
    return registry.controllers;
  }
);
