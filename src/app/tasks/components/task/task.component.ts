import { TaskInterface } from './../../types/task.interface';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TaskComponent implements OnInit {
  public checked = false;
  ngOnInit(): void {
    // const startof = this.task.date.add(3, 'day');
    // console.log(moment().valueOf());
    // if (this.task.date) {
    // }
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
}
