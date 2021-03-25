import { trigger } from '@angular/animations';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { fadeInOutAnimation } from 'src/app/shared/animations';

@Component({
  selector: 'app-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [trigger('fade', fadeInOutAnimation(200, { opacity: 1, height: '*' }, { opacity: 0, height: 0 }))],
})
export class FieldsetComponent {
  @Input() header: string = 'Default header';
  @Input() expanded = true;

  onToggle(): void {
    this.expanded = !this.expanded;
  }

  get icon(): Object {
    return {
      'fa-minus': this.expanded,
      'fa-plus': !this.expanded,
    };
  }
}
