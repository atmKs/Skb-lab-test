import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { reducers } from './store/redusers';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: 'tasks',
    children: [
      { path: '', component: DashboardComponent },
      { path: 'create', component: CreateTaskComponent },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('tasks', reducers),
    SharedModule,
  ],
  declarations: [TaskComponent, CreateTaskComponent],
})
export class TaskModule {}