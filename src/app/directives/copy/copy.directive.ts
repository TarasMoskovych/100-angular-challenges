import { Directive, HostListener, Input } from '@angular/core';
import { SnackbarService } from 'src/app/services';

@Directive({
  selector: '[appCopy]'
})
export class CopyDirective {
  @Input('appCopy') text: string = '';
  @HostListener('click')
  async onClick(): Promise<void> {
    await navigator.clipboard.writeText(this.text);
    this.snackbarService.show(`Copied: "${this.text}"`);
  }

  constructor(private snackbarService: SnackbarService) { }
}
