import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonLoaderComponent {
  @Input() width = '100%';
  @Input() height = '100%';

  get dimensions(): { width: string, height: string } {
    return { width: this.width, height: this.height };
  }
}
