import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

export interface Ribbon {
  location: RibbonLocation;
  type: RibbonType;
}

export enum RibbonLocation {
  TopRight = 'top-right',
  TopLeft = 'top-left',
  BottomRight = 'bottom-right',
  BottomLeft = 'bottom-left',
}

export enum RibbonType {
  Error = 'error',
  Info = 'info',
  Success = 'success',
}

const COLORS_MAP = {
  success: '#40c980',
  info: '#c97e5a',
  error: '#ff6058',
};

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RibbonComponent {
  @Input() configs: Ribbon = { location: RibbonLocation.TopRight, type: RibbonType.Success };
  @Input() text = 'Default text';

  get colors(): { 'background-color': string } {
    return {
      'background-color': COLORS_MAP[this.configs.type],
    };
  }
}
