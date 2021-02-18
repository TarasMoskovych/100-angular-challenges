import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PipesComponent } from './pipes.component';
import { SharedModule } from '../shared/shared.module';

import {
  TruncatePipe,
} from './';

@NgModule({
  declarations: [
    PipesComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: PipesComponent }]),
  ],
})
export class PipesModule { }
