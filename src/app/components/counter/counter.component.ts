import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  @Input() value = 0;
  @Input() min = 0;
  @Input() max = Number.MAX_SAFE_INTEGER;
  @Output() changeCounter = new EventEmitter<number>();

  onDecrease(): void {
    if (this.value > this.min) {
      this.onChange(--this.value);
    }
  }

  onIncrease(): void {
    if (this.value < this.max) {
      this.onChange(++this.value);
    }
  }

  onChange(value: number): void {
    this.changeCounter.emit(+value);
  }
}
