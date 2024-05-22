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
  parentDiv: any;
  constructor(private ViewContainerRef: ViewContainerRef) {}

  
  public addCounter (): void {
    
    const parentDiv = document.querySelector('.counter-parent');
    
    if (parentDiv) {
      const componentRef = this.ViewContainerRef.createComponent(NewCounterComponent);
      parentDiv.appendChild(componentRef.location.nativeElement);
    }
    // const componentRef = this.ViewContainerRef.createComponent(NewCounterComponent);
    // this.ViewContainerRef.insert(componentRef.hostView);

    // Optional: Append the component to a specific element in the DOM
  }
}
