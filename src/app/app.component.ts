import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewCounterComponent } from "./new-counter/new-counter.component";
import { CreateCounterComponent } from './create-counter/create-counter.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.reset.css', './app.component.css'],
    imports: [RouterOutlet, NewCounterComponent, CreateCounterComponent]
})
export class AppComponent {
  title = 'counter-app';
}
