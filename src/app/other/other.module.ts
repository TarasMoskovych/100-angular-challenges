import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { OtherComponent } from './other.component';

@NgModule({
  declarations: [
    OtherComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: OtherComponent }]),
  ],
})
export class OtherModule { }
