import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { Pill } from '../pill/pill.component';

@Component({
  selector: 'app-pill-filters',
  templateUrl: './pill-filters.component.html',
  styleUrls: ['./pill-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PillFiltersComponent {
  @Input() set labels(labels: string[]) {
    this.pills = [];
    labels.forEach((label: string) => this.pills.push({ label }));
  }
  @Output() selected = new EventEmitter<Pill[]>();

  pills: Pill[] = [];

  onFilter(pill: Pill): void {
    this.pills.forEach((p: Pill) => {
      if (pill.label === p.label) {
        p.selected = !p.selected;
      }
    });

    this.selected.emit(this.pills.filter((p: Pill) => p.selected));
  }
}
