import { TaskInterface } from './../../types/task.interface';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { allTasksSelector } from '../../store/selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, OnDestroy {
  taskSubscription!: Subscription;
  tasks: TaskInterface[] = [];
  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.initializeListeners();
  }

  public initializeListeners(): void {
    this.taskSubscription = this.store
      .select(allTasksSelector)
      .subscribe((tasks) => (this.tasks = tasks));
  }
  public ngOnDestroy(): void {
    this.taskSubscription.unsubscribe();
  }
}
