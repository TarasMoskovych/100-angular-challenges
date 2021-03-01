import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  CardComponent,
  LoaderComponent,
  ToolbarComponent,
  TopOfPageComponent,
} from './components';

import {
  DebounceClickDirective,
  DebounceKeyupDirective,
} from './directives';

import {
  FilterTermPipe,
} from './pipes';

@NgModule({
  declarations: [
    CardComponent,
    LoaderComponent,
    ToolbarComponent,
    TopOfPageComponent,
    DebounceClickDirective,
    DebounceKeyupDirective,
    FilterTermPipe,
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
    DebounceClickDirective,
    DebounceKeyupDirective,
    FilterTermPipe,
  ],
})
export class SharedModule { }
