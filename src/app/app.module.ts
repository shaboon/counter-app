import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
    declarations: [
        // Remove the declaration of NewCounterComponent from here
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [] // Remove NewCounterComponent from the bootstrap array
})
export class AppModule { }

// Bootstrap the application using the bootstrapApplication function
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
