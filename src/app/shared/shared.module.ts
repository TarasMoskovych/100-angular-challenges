import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { TopOfPageComponent } from './top-of-page/top-of-page.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    TopOfPageComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ToolbarComponent,
    TopOfPageComponent,
  ],
})
export class SharedModule { }
