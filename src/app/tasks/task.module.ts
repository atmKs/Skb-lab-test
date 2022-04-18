import { ViewTaskComponent } from './components/view-task/view-task.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';

import { TaskComponent } from './components/task/task.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { reducers } from './store/redusers';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskRoutingModule } from './task-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('tasks', reducers),
    SharedModule,
  ],
  declarations: [
    TaskComponent,
    CreateTaskComponent,
    DashboardComponent,
    TasksListComponent,
    ViewTaskComponent,
  ],
})
export class TaskModule {}
