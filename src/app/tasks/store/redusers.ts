import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import {
  createTask,
  DeleteTask,
  EditTask,
  ViewTask,
} from './actions/task.action';
import { TaskInterface } from '../types/task.interface';
import { State } from '../types/state.Interface';

export const adapter: EntityAdapter<TaskInterface> =
  createEntityAdapter<TaskInterface>();
const initialState: State = adapter.getInitialState({ selectedTaskId: null });
const tasksReduser = createReducer(
  initialState,
  on(createTask, (state, { task }) =>
    adapter.addOne(
      { ...task, id: String(Math.floor(Math.random() * Date.now())) },
      state
    )
  ),
  on(EditTask, (state, { updateTask }) => adapter.updateOne(updateTask, state)),
  on(DeleteTask, (state, { taskId }) => adapter.removeOne(taskId, state)),
  on(ViewTask, (state, { task }) => ({ ...state, selectedTaskId: task.id }))
);

export const reducers = (state: State, acion: Action) => {
  return tasksReduser(state, acion);
};
