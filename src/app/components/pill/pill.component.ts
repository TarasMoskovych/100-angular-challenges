import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

export enum PillType {
  Error = 'error',
  Info = 'info',
  Success = 'success',
  Warning = 'warning'
}

export const COLORS_MAP = {
  error: '#ff6058',
  info: '#007acc',
  success: '#40c980',
  warning: '#c97e5a',
};

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PillComponent {
  @Input() label = 'Default label';
  @Input() icon: string = '';
  @Input() type: PillType;

  get color(): Object {
    return {
      'background-color': COLORS_MAP[this.type] || COLORS_MAP.success,
    };
  }
}
