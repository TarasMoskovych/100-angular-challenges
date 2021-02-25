import { Directive, HostListener } from '@angular/core';
import { AbstractDebounceDirective } from './abstract-debounce.directive';

@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective extends AbstractDebounceDirective<MouseEvent> {
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    this.onEvent(event);
  }
}
