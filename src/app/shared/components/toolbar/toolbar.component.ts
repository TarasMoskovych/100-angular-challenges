import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  @Input() title: string = 'Default Title';
  @Output() toggle = new EventEmitter<boolean>();
  opened = false;

  onToggle(): void {
    this.opened = !this.opened;
    this.toggle.emit(this.opened);
  }
}
