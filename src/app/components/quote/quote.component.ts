import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Quote, QuoteColors } from './quote.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuoteComponent {
  @Input() colors: QuoteColors = { text: '#000', background: '#fff' };
  @Input() quote: Quote;
}
