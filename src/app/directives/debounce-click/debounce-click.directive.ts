import { Directive, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  private subject = new Subject<MouseEvent>();

  @Input() debounceTime = 500;
  @Output() debouncedClick = new EventEmitter<MouseEvent>();
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    this.subject.next(event);
  }

  ngOnInit(): void {
    this.subject
      .pipe(debounceTime(this.debounceTime))
      .subscribe((event: MouseEvent) => this.debouncedClick.emit(event));
  }

  ngOnDestroy(): void {
    this.subject.complete();
  }
}
