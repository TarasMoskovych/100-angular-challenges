import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { DirectivesComponent } from './directives.component';

import {
  CopyDirective,
  RippleDirective,
  ScaleDirective,
} from './';

@NgModule({
  declarations: [
    DirectivesComponent,
    CopyDirective,
    RippleDirective,
    ScaleDirective,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: DirectivesComponent }]),
  ],
})
export class DirectivesModule { }
