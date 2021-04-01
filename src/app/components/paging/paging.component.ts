import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagingComponent implements OnInit {
  @Input() totalItems = 20;
  @Input() pageSize = 4;
  @Input() currentPage = 1;
  @Input() step = 2;
  @Output() pageChange = new EventEmitter<number>();

  private startPage: number;
  private endPage: number;
  private defaultPagePosition: number;
  private totalPages: number;

  pages: number[];

  ngOnInit(): void {
    this.defaultPagePosition = Math.ceil(this.pageSize / 2);
    this.calculatePages();
  }

  onStepDown(): void {
    const nextPage = this.currentPage - this.step;
    this.onSelect(nextPage > 0 ? nextPage : 1);
  }

  onStepUp(): void {
    const nextPage = this.currentPage + this.step;
    this.onSelect(nextPage < this.totalPages ? nextPage : this.totalPages);
  }

  onSelect(page: number): void {
    if (this.currentPage === page) { return; }

    this.currentPage = page;
    this.calculatePages();
    this.pageChange.emit(page);
  }

  get isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  get isLastPage(): boolean {
    return this.currentPage === this.totalPages;
  }

  private calculatePages(): void {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    this.pages = [];

    if (this.currentPage <= this.defaultPagePosition) {
      this.startPage = 1;
      this.endPage = this.pageSize;
    } else if (this.currentPage + (this.pageSize - this.defaultPagePosition) >= this.totalPages) {
      this.startPage = this.totalPages - (this.pageSize - 1);
      this.endPage = this.totalPages;
    } else {
      this.startPage = this.currentPage - (this.defaultPagePosition - 1);
      this.endPage = this.currentPage + (this.pageSize - this.defaultPagePosition);
    }

    for (let i = this.startPage; i <= this.endPage; i++) {
      this.pages.push(i);
    }
  }
}
