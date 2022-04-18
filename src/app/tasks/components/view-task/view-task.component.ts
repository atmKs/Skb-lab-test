import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskInterface } from '../../types/task.interface';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss'],
})
export class ViewTaskComponent implements OnInit {
  public task!: TaskInterface;
  constructor(
    @Optional() private dialogRef: MatDialogRef<ViewTaskComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) private dialogData: TaskInterface
  ) {}

  ngOnInit() {
    this.initializeValues();
  }

  public initializeValues(): void {
    if (this.dialogData) {
      this.task = this.dialogData;
    }
  }
  public dialogRefClose(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
