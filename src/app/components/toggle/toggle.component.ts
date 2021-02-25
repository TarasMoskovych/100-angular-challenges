import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleComponent {
  @Input() checked = false;
  @Output() check = new EventEmitter<boolean>();
  id = `toggle-${Date.now()}`;

  onChange(): void {
    this.checked = !this.checked;
    this.check.emit(this.checked);
  }
}
