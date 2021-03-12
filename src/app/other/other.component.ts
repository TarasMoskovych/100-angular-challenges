import { trigger } from '@angular/animations';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { fadeInOutAnimation } from '../shared/animations';

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
  shown = true;
}
