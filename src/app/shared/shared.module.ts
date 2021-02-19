import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  CardComponent,
  LoaderComponent,
  ToolbarComponent,
  TopOfPageComponent,
} from './';

@NgModule({
  declarations: [
    CardComponent,
    LoaderComponent,
    ToolbarComponent,
    TopOfPageComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardComponent,
    LoaderComponent,
    ToolbarComponent,
    TopOfPageComponent,
  ],
})
export class SharedModule { }
