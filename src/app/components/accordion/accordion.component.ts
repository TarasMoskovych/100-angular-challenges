import { trigger } from '@angular/animations';
import { Component, ChangeDetectionStrategy, ContentChildren, QueryList } from '@angular/core';
import { fadeInOutAnimation } from 'src/app/shared/animations';

import { AccordionItemComponent } from './accordion-item/accordion-item.component';

const EXPANDED = {
  opacity: 1,
  height: '*',
  marginTop: '15px',
};
const COLLAPSED = {
  opacity: 0,
  height: 0,
  marginTop: '0',
};

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('toggle', fadeInOutAnimation(250, EXPANDED, COLLAPSED)),
  ]
})
export class AccordionComponent {
  @ContentChildren(AccordionItemComponent) items: QueryList<AccordionItemComponent>;
}
