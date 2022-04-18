import { TaskInterface } from './../../types/task.interface';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TaskComponent implements OnInit {
  public checked = false;
  public class = '';
  ngOnInit(): void {
    this.setClass();
  }
  @Input() public task!: TaskInterface;

  @Output() public delete = new EventEmitter();
  @Output() public edit = new EventEmitter();
  @Output() public view = new EventEmitter();

  public onDeleteTask(): void {
    this.delete.emit(this.task);
  }
  public onEditTask(): void {
    this.edit.emit(this.task);
  }
  public onViewTask() {
    this.view.emit(this.task);
  }

  public setClass(): void {
    if (
      this.task.date.diff(moment().startOf('day'), 'd') <= 3 &&
      this.task.date.diff(moment().startOf('day'), 'd') > 0
    ) {
      this.class = 'yellow';
    } else if (this.task.date.diff(moment().startOf('day'), 'd') <= 0) {
      this.class = 'red';
    }
  }
}
