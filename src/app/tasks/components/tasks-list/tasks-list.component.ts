import { ViewTaskComponent } from './../view-task/view-task.component';
import { TaskInterface } from './../../types/task.interface';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { Store } from '@ngrx/store';
import { DeleteTask, ViewTask } from '../../store/actions/task.action';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent {
  @Input() public tasks: TaskInterface[] = [];
  constructor(private store: Store, private dialog: MatDialog) {}

  public openCreateTask(): void {
    this.dialog.open(CreateTaskComponent);
  }

  public onTaskDelete(task: TaskInterface): void {
    this.store.dispatch(DeleteTask({ taskId: task.id }));
  }
  public onTaskEdit(task: TaskInterface): void {
    this.dialog.open(CreateTaskComponent, {
      data: task,
    });
  }
  public onTaskView(task: TaskInterface) {
    this.store.dispatch(ViewTask({ task }));
    this.dialog.open(ViewTaskComponent, {
      data: task,
    });
  }
  public drop(event: CdkDragDrop<TaskInterface>): void {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
}
