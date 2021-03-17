import { trigger } from '@angular/animations';
import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { of } from 'rxjs';
import { delay, take } from 'rxjs/operators';

import { fadeInOutAnimation } from 'src/app/shared/animations';

@Component({
  selector: 'app-simple-popup',
  templateUrl: './simple-popup.component.html',
  styleUrls: ['./simple-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [trigger('fade', fadeInOutAnimation())],
})
export class SimplePopupComponent {
  @Input() text: string = 'Default text';
  @Input() placement: string = 'top';

  showPopup = false;
  clicked = false;

  constructor(private cdr: ChangeDetectorRef) {}

  onTogglePopup(show: boolean): void {
    if (!this.clicked) {
      this.showPopup = show;
    }
  }

  onOpenPopup(): void {
    this.showPopup = true;
    this.clicked = true;
    this.onClose();
  }

  private onClose(): void {
    of(null)
      .pipe(
        take(1),
        delay(2000),
      ).subscribe(() => {
        this.showPopup = false;
        this.clicked = false;
        this.cdr.markForCheck();
      });
  }
}
