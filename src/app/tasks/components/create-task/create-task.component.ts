import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { TaskStatusInterface } from '../../types/taskStatus.interface';
import { Store } from '@ngrx/store';
import { createTask } from '../../store/actions/task.action';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  public currentDate = moment().startOf('day');
  public form!: FormGroup;
  constructor(private fb: FormBuilder, private store: Store) {}

  public ngOnInit(): void {
    this.initializeForm();
  }
  public initializeForm(): void {
    this.form = this.fb.group({
      title: '',
      description: '',
      date: moment(),
      status: TaskStatusInterface.InPgrogess,
    });
  }

  public createTask(): void {
    this.store.dispatch(createTask({ task: this.form.value }));
  }
}
