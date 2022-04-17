import { TaskStatusInterface } from './taskStatus.interface';
import { Moment } from 'moment';

export interface TaskInterface {
  id: string;
  title: string;
  description: string;
  date: Moment;
  status: TaskStatusInterface | null;
  closed: boolean | null;
}
