import { trigger } from '@angular/animations';
import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';

import { fadeInOutAnimation } from 'src/app/shared/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade-overlay', fadeInOutAnimation()),
    trigger('fade-modal', fadeInOutAnimation(250)),
  ],
})
export class ModalComponent {
  @Input() title = 'Default modal title';
  @Input() opened = false;
  @Output() open = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  constructor(private cdr: ChangeDetectorRef) { }

  closeModal(): void {
    this.toggle(false);
  }

  openModal(): void {
    this.toggle(true);
  }

  private toggle(opened: boolean): void {
    this.opened = opened;
    this.cdr.markForCheck();
    this[opened ? 'open' : 'close'].emit();
  }
}
