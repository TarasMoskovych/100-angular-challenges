import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

export interface ButtonToggle {
  id: string;
  text: string;
  active?: boolean;
}

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonToggleComponent {
  @Input() buttons: ButtonToggle[];
  @Output() buttonClick = new EventEmitter<ButtonToggle>();

  onClick(button: ButtonToggle): void {
    this.buttons.forEach((btn: ButtonToggle) => btn.active = button.id === btn.id);
    this.buttonClick.emit(button);
  }
}
