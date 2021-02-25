import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import {
  AccordionComponent,
  AccordionItemComponent,
  CreditCardInputComponent,
  LinkedinPostComponent,
  ModalComponent,
  ProgressBarComponent,
  QuoteComponent,
  StarRatingsComponent,
  TwitterPostComponent,
 } from './';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ComponentsComponent,
    AccordionComponent,
    AccordionItemComponent,
    CreditCardInputComponent,
    LinkedinPostComponent,
    ModalComponent,
    ProgressBarComponent,
    QuoteComponent,
    StarRatingsComponent,
    TwitterPostComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: ComponentsComponent }]),
  ],
})
export class ComponentsModule { }
