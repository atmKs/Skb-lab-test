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
  props<{ update: Update<TaskInterface> }>()
);