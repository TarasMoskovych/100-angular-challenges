import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarRatingsComponent {
  @Input() value = 0;
  @Input() stars = 5;

  get array(): number[] {
    return Array(Math.ceil(this.stars)).fill(undefined).map((value: number, idx: number) => idx);
  }

  getState(n: number): any {
    const fullStar = this.value / (n + 1) >= 1;
    const fas = this.value > n;
    return {
      fas,
      far: !fas,
      'fa-star': fullStar || !fas,
      'fa-star-half-alt': !fullStar && fas,
    };
  }
}
