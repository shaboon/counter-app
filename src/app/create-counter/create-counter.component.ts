import { Component, ViewContainerRef } from '@angular/core';
import { NewCounterComponent } from '../new-counter/new-counter.component';

@Component({
  selector: 'app-create-counter',
  standalone: true,
  imports: [],
  templateUrl: './create-counter.component.html',
  styleUrl: './create-counter.component.css'
})
export class CreateCounterComponent {
  constructor(private ViewContainerRef: ViewContainerRef) {}

  public addCounter (): void {
    const component = this.ViewContainerRef.createComponent(NewCounterComponent);
  }
  }
