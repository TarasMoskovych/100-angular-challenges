import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TopOfPageComponent } from './top-of-page/top-of-page.component';

@NgModule({
  declarations: [
    CardComponent,
    ToolbarComponent,
    TopOfPageComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardComponent,
    ToolbarComponent,
    TopOfPageComponent,
  ],
})
export class SharedModule { }
