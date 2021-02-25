import { Directive, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

interface AbstractEvent {
  preventDefault: () => void;
  stopPropagation: () => void;
}

@Directive()
export abstract class AbstractDebounceDirective<T extends AbstractEvent> implements OnInit, OnDestroy {
  private subject = new Subject<T>();

  @Input() debounceTime = 500;
  @Output() debouncedEvent = new EventEmitter<T>();

  ngOnInit(): void {
    this.subscribe();
  }

  ngOnDestroy(): void {
    this.subject.complete();
  }

  protected onEvent(event: T): void {
    event.preventDefault();
    event.stopPropagation();

    this.subject.next(event);
  }

  protected subscribe(): void {
    this.subject
      .pipe(debounceTime(this.debounceTime))
      .subscribe((event: T) => this.debouncedEvent.emit(event));
  }
}
