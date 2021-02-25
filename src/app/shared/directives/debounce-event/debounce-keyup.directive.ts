import { Directive, HostListener } from '@angular/core';
import { AbstractDebounceDirective } from './abstract-debounce.directive';

@Directive({
  selector: '[appDebounceKeyup]'
})
export class DebounceKeyupDirective extends AbstractDebounceDirective<KeyboardEvent> {
  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    this.onEvent(event);
  }
}
