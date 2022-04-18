import { TaskInterface } from '../../types/task.interface';
import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { Update } from '@ngrx/entity';

export const createTask = createAction(
  ActionTypes.CREATE_TASK,
  props<{ task: TaskInterface }>()
);

export const EditTask = createAction(
  ActionTypes.EDIT_TASK,
  props<{ updateTask: Update<TaskInterface> }>()
);

export const DeleteTask = createAction(
  ActionTypes.DELETE_TASK,
  props<{ taskId: string }>()
);

export const ViewTask = createAction(
  ActionTypes.VIEW_TASK,
  props<{ task: TaskInterface }>()
);
