import { TaskInterface } from './../../types/task.interface';
import { EditTask } from './../../store/actions/task.action';
import { taskIdSelector } from './../../store/selectors';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { TaskStatusInterface } from '../../types/taskStatus.interface';
import { Store } from '@ngrx/store';
import { createTask } from '../../store/actions/task.action';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  public editTask = false;

  public currentDate = moment().startOf('day');
  public form!: FormGroup;

  private taskId?: any;
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    @Optional() private dialogRef: MatDialogRef<CreateTaskComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) private dialogData: TaskInterface
  ) {}

  public ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
    if (this.dialogData) {
      this.editTask = true;
      this.taskId = this.dialogData.id;
    }
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
  initializeValues(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.get('id')) {
        this.taskId = params.get('id');
        this.editTask = true;
        this.store
          .select(taskIdSelector(this.taskId))
          .subscribe((task) => this.form.patchValue(task));
      }
    });
  }

  public onSubmit(): void {
    if (this.form.valid) {
      if (this.editTask) {
        this.store.dispatch(
          EditTask({ update: { id: this.taskId, changes: this.form.value } })
        );
      }
      this.store.dispatch(createTask({ task: this.form.value }));
      this.form.reset();
    }
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
