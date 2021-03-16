import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-banner-cut-out',
  templateUrl: './banner-cut-out.component.html',
  styleUrls: ['./banner-cut-out.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerCutOutComponent {
  @Input() src: string = 'assets/img/back.jpg';
  @Input() text: string = 'Default banner text';

  get background(): Object {
    return {
      'background-image': `url(${this.src})`,
    };
  }
}
