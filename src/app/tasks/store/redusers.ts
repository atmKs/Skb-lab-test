import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { createTask, EditTask } from './actions/task.action';
import { TaskInterface } from '../types/task.interface';
import { State } from '../types/state.Interface';

export const adapter: EntityAdapter<TaskInterface> =
  createEntityAdapter<TaskInterface>();
const initialState: State = adapter.getInitialState({ selectedTaskId: null });
const tasksReduser = createReducer(
  initialState,
  on(createTask, (state, { task }) =>
    adapter.addOne({ ...task, id: Math.trunc(Math.random() * 1000) }, state)
  ),
  on(EditTask, (state, { update }) => adapter.updateOne(update, state))
);

export const reducers = (state: State, acion: Action) => {
  return tasksReduser(state, acion);
};
