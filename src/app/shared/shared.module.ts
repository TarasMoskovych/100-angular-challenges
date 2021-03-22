import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  CardComponent,
  EmailFormComponent,
  LoaderComponent,
  SnackbarComponent,
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
    EmailFormComponent,
    LoaderComponent,
    SnackbarComponent,
    ToolbarComponent,
    TopOfPageComponent,
    DebounceClickDirective,
    DebounceKeyupDirective,
    FilterTermPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CardComponent,
    EmailFormComponent,
    LoaderComponent,
    SnackbarComponent,
    ToolbarComponent,
    TopOfPageComponent,
    DebounceClickDirective,
    DebounceKeyupDirective,
    FilterTermPipe,
  ],
})
export class SharedModule { }
