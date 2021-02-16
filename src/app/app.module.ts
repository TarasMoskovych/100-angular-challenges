import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  CardComponent,
  ToolbarComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
