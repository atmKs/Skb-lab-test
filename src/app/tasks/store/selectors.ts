import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter } from './redusers';
import { State } from '../types/state.Interface';
export const { selectAll } = adapter.getSelectors();

export const tasksFeatureSelector = createFeatureSelector<State>('tasks');
export const allTasksSelector = createSelector(tasksFeatureSelector, selectAll);
