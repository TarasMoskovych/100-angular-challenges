import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appRipple]'
})
export class RippleDirective {
  @HostBinding('class') className = 'ripple';
}
