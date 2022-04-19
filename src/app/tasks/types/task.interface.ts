import { Moment } from 'moment';

export interface TaskInterface {
  id: string;
  title: string;
  description: string;
  date: Moment;
}
