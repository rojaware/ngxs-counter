import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { CounterState } from './store/counter.state';
import { Increment, Decrement, Reset } from './store/counter.actions';

@Component({
  selector: 'my-app',
  template: `
    <app-counter 
      target="counter1"
      [total]="counter1|async" 
      (increment)="increment($event)"
      (decrement)="decrement($event)"
      (reset)="reset($event)" 
    ></app-counter>
    <app-counter 
      target="counter2"
      [total]="counter2|async" 
      (increment)="increment($event)"
      (decrement)="decrement($event)"
      (reset)="reset($event)" 
    ></app-counter>
  `
})
export class AppComponent  {
  @Select(state => state["counter1"]) counter1: Observable<number>;
    @Select(state => state["counter2"]) counter2: Observable<number>;

  constructor(private store: Store) { }

  increment(target) {
    this.store.dispatch(new Increment({ target }));
  }

  decrement(target) {
    this.store.dispatch(new Decrement({ target }));
  }

  reset(target) {
    this.store.dispatch(new Reset({ target }));
  }
}