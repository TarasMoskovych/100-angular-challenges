import { Component, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortTableComponent implements OnChanges {
  @Input() data: any[];
  @Input() sortedBy: string;
  asc = true;

  private titleMap: any = {};

  ngOnChanges(): void {
    if (this.sortedBy) {
      this.onSort({ key: this.sortedBy, asc: this.asc });
    }
  }

  onSort({ key, asc }: { key: string, asc: boolean }): void {
    this.updateSorts(key, asc);

    this.data.sort((a: any, b: any) => {
      const current = this.asc ? a : b;
      const next  = this.asc ? b : a;
      return current[key].localeCompare(next[key]);
    });
  }

  private updateSorts(key: string, asc: boolean): void {
    if (this.titleMap[key] === undefined) {
      this.titleMap[key] = asc;
      this.asc = asc;
    } else {
      this.asc = !asc;
    }

    Object.keys(this.titleMap).forEach((title: string) => title !== key && delete this.titleMap[title]);
  }
}
