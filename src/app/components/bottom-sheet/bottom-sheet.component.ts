import { trigger } from '@angular/animations';
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

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
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade', fadeInOutAnimation()),
    trigger('fade-container', fadeInOutAnimation(300, EXPANDED, COLLAPSED)),
  ],
})
export class BottomSheetComponent {
  @Input() isOpened = false;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
