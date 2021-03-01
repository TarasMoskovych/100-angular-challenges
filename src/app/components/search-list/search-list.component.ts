import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchListComponent {
  @Input() values: string[] = [];
  search = '';
  showResuts = false;

  onSearchSelect(value: string, showResuts = false): void {
    this.search = value;
    this.showResuts = showResuts;
  }
}
