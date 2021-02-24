import { Component, ChangeDetectionStrategy, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionItemComponent {
  @Input() title = 'Default title';
  @Input() opened = false;
  @ContentChild(TemplateRef) template: TemplateRef<HTMLElement>;

  toggle(): void {
    this.opened = !this.opened;
  }
}
