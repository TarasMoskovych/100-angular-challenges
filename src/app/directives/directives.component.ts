import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DirectivesComponent {
  counter = 0;

  onLog(e: MouseEvent): void {
    this.counter++;
    console.log(e);
  }
}
