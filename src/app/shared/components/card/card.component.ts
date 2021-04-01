import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() icon: string;
  @Input() color = '#40c980';
}
