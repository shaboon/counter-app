import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: []
})
export class AppModule { }

// Bootstrap the application using the bootstrapApplication function
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
