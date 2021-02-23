import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipesComponent {
  data = [1, 2, [3, 4], [[5, 6]]];
}
