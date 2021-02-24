import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ChangeDetectionStrategy, ContentChildren, QueryList } from '@angular/core';

import { AccordionItemComponent } from './accordion-item/accordion-item.component';

const ANIMATION_DURATION = 250;
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
    trigger('toggle', [
      transition(':leave', [
        style(EXPANDED),
        animate(ANIMATION_DURATION, style(COLLAPSED)),
      ]),
      transition(':enter', [
        style(COLLAPSED),
        animate(ANIMATION_DURATION, style(EXPANDED)),
      ]),
    ]),
  ]
})
export class AccordionComponent {
  @ContentChildren(AccordionItemComponent) items: QueryList<AccordionItemComponent>;
}
