import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { INCREMENT, DECREMENT, RESET, LOAD } from './counter';

interface AppState {
  count: number;
  load: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @Input()
  public counter;

  count$: Observable<number>;
  load$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
    this.load$ = store.pipe(select('load'));
    this.count$.subscribe(data => this.counter = data);
  }

  increment() {
    this.store.dispatch({ type: INCREMENT});
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }

  load() {
    this.store.dispatch({type: LOAD});
  }
}
