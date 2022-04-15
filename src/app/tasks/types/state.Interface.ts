import { EntityState } from '@ngrx/entity';
import { TaskInterface } from './task.interface';

export interface State extends EntityState<TaskInterface> {
  selectedTaskId: number | string | null;
}
