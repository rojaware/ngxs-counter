import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="counter">
      <div class="total">{{total}}</div>
      <button (click)="increment.emit(target)">+</button>
      <button (click)="decrement.emit(target)">-</button>
      <button (click)="reset.emit(target)">C</button>
    </div>`,
  styles: [`
  .counter {
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: 1px solid #9999;
    border-radius: 10px;
    padding: 10px;
  }
  .counter button {
    width: 40px;
    margin: 10px;
  }
  .total {
    margin: 10px;
    font-size: 80px;
  }
  `]
})
export class CounterComponent {
  @Input() total: number;
  @Input() target: string;
  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();
  @Output() reset = new EventEmitter();
}
