import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
  ],
  exports: [
    FormsModule,
    CardComponent,
    LoaderComponent,
    ToolbarComponent,
    TopOfPageComponent,
  ],
})
export class SharedModule { }
