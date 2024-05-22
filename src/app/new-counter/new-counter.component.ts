import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-new-counter',
  standalone: true,
  imports: [],
  templateUrl: './new-counter.component.html',
  styleUrl: './new-counter.component.css'
})
export class NewCounterComponent {
  counter: number = 0;
  customText: string = 'Counter Title';
  counterDesc: string = 'This is a simple counter app';

  constructor(private elementRef: ElementRef) {}

  deleteDiv() {
    this.elementRef.nativeElement.remove();
  }

  addTitle() {
    const customText = prompt('Enter a new title for the counter');
    const counterDesc = prompt('Enter a new description for the counter');

    if (customText !== null) {
      this.customText = customText;
    }
    if (counterDesc !== null) {
      this.counterDesc = counterDesc;
    }

  }

  // Increment counter
  increment() {
    this.counter++;
  }

  // Decrement counter
  decrement() {
    this.counter--;
  }
}