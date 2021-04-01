import { trigger } from '@angular/animations';
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { fadeInOutAnimation } from '../shared/animations';
import { EmailFormComponent } from '../shared/components';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade', fadeInOutAnimation()),
  ]
})
export class OtherComponent {
  @ViewChild(EmailFormComponent) formComponent: EmailFormComponent;
  shown = true;

  onSubmit(data: { form: FormGroup, values: any }): void {
    data.form.reset(data.form.value);
  }
}
