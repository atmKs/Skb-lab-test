import { TaskInterface } from './../../types/task.interface';
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
  public form!: FormGroup;
  constructor(private fb: FormBuilder, private sotre: Store) {}

  public ngOnInit(): void {
    this.initializeForm();
  }
  public initializeForm(): void {
    this.form = this.fb.group({
      title: '',
      description: '',
      date: moment().startOf('day').add(1, 'day'),
      status: TaskStatusInterface.InPgrogess,
    });
  }

  public createTask() {
    this.sotre.dispatch(createTask({ task: this.form.value }));
  }
}
