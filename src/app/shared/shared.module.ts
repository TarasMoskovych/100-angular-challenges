import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  CardComponent,
  EmailFormComponent,
  FooterComponent,
  LoaderComponent,
  NotFoundComponent,
  SkeletonLoaderComponent,
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
    FooterComponent,
    LoaderComponent,
    NotFoundComponent,
    SkeletonLoaderComponent,
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
    FooterComponent,
    LoaderComponent,
    NotFoundComponent,
    SkeletonLoaderComponent,
    SnackbarComponent,
    ToolbarComponent,
    TopOfPageComponent,
    DebounceClickDirective,
    DebounceKeyupDirective,
    FilterTermPipe,
  ],
})
export class SharedModule { }
