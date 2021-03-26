import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

export enum PillType {
  Error = 'error',
  Info = 'info',
  Success = 'success',
  Warning = 'warning'
}

export interface Pill {
  label: string;
  type?: PillType;
  selected?: boolean;
  icon?: string
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
  @Input() pill: Pill = { label: 'Default label' };
  @Output() select = new EventEmitter<Pill>();

  get color(): Object {
    return {
      'background-color': COLORS_MAP[this.pill.type || 'info'],
    };
  }

  onSelect(pill: Pill): void {
    this.select.emit(pill);
  }
}
