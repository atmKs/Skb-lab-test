import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter } from './redusers';
import { State } from '../types/state.Interface';
export const { selectAll, selectEntities } = adapter.getSelectors();

export const tasksFeatureSelector = createFeatureSelector<State>('tasks');
export const allTasksSelector = createSelector(tasksFeatureSelector, selectAll);

export const taskIdEntities = (id: any) =>
  createSelector(selectEntities, (taskEntities) => taskEntities[id]);

export const taskIdSelector = (taskId: any) =>
  createSelector(tasksFeatureSelector, taskIdEntities(taskId));
