import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Increment, Decrement, Reset } from '../store/counter.actions';

export interface CounterModel {
  "counter1": number;
  "counter2": number;
}

@State<number>({ 
  name: 'counter1', 
  defaults: 0
})
export class CounterState {
  target = 'counter1';

  @Action(Increment)
  Increment(store: StateContext<number>, action: Increment) {
    if (action.payload.target != this.target) return;
    const counter = store.getState();
    store.setState(counter+1);
  } 

  @Action(Decrement)
  Decrement(store: StateContext<number>, action: Decrement) {
    if (action.payload.target != this.target) return;
    const counter = store.getState();
    store.setState(counter-1);
  } 

  @Action(Reset)
  Reset(store: StateContext<number>, action: Reset) {
    if (action.payload.target != this.target) return;
    const counter = store.getState();
    store.setState(0);
  }
}

@State<number>({ 
  name: 'counter2', 
  defaults: 0
})
export class CounterState2 extends CounterState {
  target = 'counter2';
}