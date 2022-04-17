import { TaskInterface } from './../../types/task.interface';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { Store } from '@ngrx/store';
import { DeleteTask } from '../../store/actions/task.action';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  @Input() public tasks: TaskInterface[] = [];
  constructor(private store: Store, private dialog: MatDialog) {}

  ngOnInit() {}

  public openCreateTask(): void {
    this.dialog.open(CreateTaskComponent);
  }

  onTaskDelete(task: TaskInterface) {
    this.store.dispatch(DeleteTask({ taskId: task.id }));
  }
  onTaskEdit(task: TaskInterface) {
    this.dialog.open(CreateTaskComponent, {
      data: task,
    });
  }
}
