import { Component } from '@angular/core';

@Component({
  selector: 'app-new-counter',
  standalone: true,
  imports: [],
  templateUrl: './new-counter.component.html',
  styleUrl: './new-counter.component.css'
})
export class NewCounterComponent {
  counter: number = 0;

  // Increment counter
  increment() {
    this.counter++;
  }

  // Decrement counter
  decrement() {
    this.counter--;
  }
}