import { trigger } from '@angular/animations';
import { Component, ChangeDetectionStrategy, Input, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { of } from 'rxjs';
import { delay, take } from 'rxjs/operators';

import { fadeInOutAnimation } from 'src/app/shared/animations';

const EXPANDED = {
  opacity: 1,
  height: '*',
  transform: '*',
};
const COLLAPSED = {
  opacity: 0,
  height: 0,
  transform: 'scale(0)',
};

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [trigger('fade', fadeInOutAnimation(250, EXPANDED, COLLAPSED))],
})
export class SnackbarComponent implements OnInit {
  @Input() message: string = 'Default message';
  @Input() ms: number = 3000;
  @Input() autoclose: boolean = true;
  @Output() afterClosed = new EventEmitter<void>();
  shown = true;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.autoclose && this.onClose();
  }

  close(): void {
    this.shown = false;
    this.cdr.markForCheck();
    this.afterClosed.emit();
  }

  private onClose(): void {
    of(true)
      .pipe(
        delay(this.ms),
        take(1),
      ).subscribe(() => this.close());
  }
}
