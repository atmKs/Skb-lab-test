import { TaskInterface } from './../../types/task.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
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
