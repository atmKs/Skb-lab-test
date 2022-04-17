import { Subscription } from 'rxjs';
import { TaskInterface } from './../../types/task.interface';
import { EditTask } from './../../store/actions/task.action';
import { taskIdSelector } from './../../store/selectors';
import { Component, Inject, OnInit, Optional, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { TaskStatusInterface } from '../../types/taskStatus.interface';
import { Store } from '@ngrx/store';
import { createTask } from '../../store/actions/task.action';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  public editTask = false;
  public viewTask = false;
  public taskIdSubscribtion!: Subscription;
  public currentDate = moment().startOf('day');
  public form!: FormGroup;
  private taskId?: any;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    @Optional() private dialogRef: MatDialogRef<CreateTaskComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) private dialogData: TaskInterface
  ) {}

  public ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
    this.initializeListeners();
  }

  public initializeForm(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: [moment(), Validators.required],
      status: TaskStatusInterface.InPgrogess,
    });
    this.form.patchValue(this.dialogData);
  }

  public initializeValues(): void {
    if (this.dialogData) {
      this.editTask = true;
      this.taskId = this.dialogData.id;
    }
  }
  public initializeListeners(): void {
    if (this.taskId) {
      this.store
        .select(taskIdSelector(this.taskId))
        .subscribe((task) => this.form.patchValue({ task }));
    }
  }

  public onSubmit(): void {
    if (this.form.valid) {
      if (this.editTask) {
        this.store.dispatch(
          EditTask({
            updateTask: { id: this.taskId, changes: this.form.value },
          })
        );
      } else {
        this.store.dispatch(createTask({ task: this.form.value }));
        this.form.reset();
      }
    }
    if (this.dialogRef) {
      this.dialogRefClose();
    }
  }

  public dialogRefClose(): void {
    this.dialogRef.close();
  }
}
