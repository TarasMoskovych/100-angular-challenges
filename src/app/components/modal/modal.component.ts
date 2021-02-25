import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';

const fade = (ms: number = 200) => {
  return [
    transition(':leave', [
      style({ opacity: 1 }),
      animate(ms, style({ opacity: 0 })),
    ]),
    transition(':enter', [
      style({ opacity: 0 }),
      animate(ms, style({ opacity: 1 })),
    ]),
  ];
};

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade-overlay', fade()),
    trigger('fade-modal', fade(250)),
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
