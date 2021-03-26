import { Component, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';

const COLORS_MAP = {
  blue: '#007acc',
  green: '#40c980',
  yellow: '#e5e510',
  orange: '#c97e5a',
  red: '#ff6058',
};

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent implements OnChanges {
  @Input() value: string | number = 0;
  @Input() colored = false;

  ngOnChanges() {
    this.value = this.value + '%';
  }

  get style(): { 'background-color': string, width: number | string } {
    let color = COLORS_MAP.blue;
    let value = Number.parseInt(this.value as string);

    if (this.colored) {
      if (value < 50) {
        color = COLORS_MAP.red;
      } else if (value < 75) {
        color = COLORS_MAP.orange;
      } else if (value < 100) {
        color = COLORS_MAP.yellow;
      } else {
        color = COLORS_MAP.green;
      }
    }

    return {
      'background-color': color,
      width: this.value,
    };
  }
}
