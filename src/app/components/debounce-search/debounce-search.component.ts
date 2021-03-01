import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DebounceSearchComponent implements OnInit, OnDestroy {
  @Input() value = '';
  @Output() search = new EventEmitter<string>();

  private subject = new Subject<string>();

  ngOnInit(): void {
    this.subject
      .pipe(
        debounceTime(250),
        distinctUntilChanged(),
      )
      .subscribe((value: string) => this.search.emit(value));
  }

  ngOnDestroy(): void {
    this.subject.complete();
  }

  onClear(): void {
    this.value = '';
    this.search.emit(this.value);
  }

  onModelChanged(value: string): void {
    this.subject.next(value);
  }
}
