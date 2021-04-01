import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleTableComponent {
  @Input() data: any;
  @Input() order = this.defaultOrder;
  @Input() sorted = false;
  @Input() asc = false;
  @Output() sort = new EventEmitter<{ key: string, asc: boolean }>();

  onSort(key: any): void {
    this.sort.emit({ key, asc: this.asc });
  }

  private defaultOrder(): number {
    return 0;
  }
}
