import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { interval, Subscription } from 'rxjs';

const TIMER_NUMERICS = {
  milliSecondsInSecond: 1000,
  secondsInMinute: 60,
  minutesInHour: 60,
  hoursInDay: 24,
};

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  @Input() set time(value: string) {
    this.countDownTime = new Date(value).getTime();
  }
  @Output() finish = new EventEmitter<void>();

  private subscription: Subscription;

  countDownTime: number;
  date: any = {};

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getTimeDifference();
    this.subscription = interval(1000)
      .subscribe(() => this.getTimeDifference());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getTimeDifference(): void {
    this.allocateTimeUnits(this.countDownTime - new Date().getTime());
  }

  private allocateTimeUnits(timeDifference: number): void {
    const { hoursInDay, milliSecondsInSecond, minutesInHour, secondsInMinute } = TIMER_NUMERICS;
    const seconds = Math.floor((timeDifference) / (milliSecondsInSecond) % secondsInMinute);
    const minutes = Math.floor((timeDifference) / (milliSecondsInSecond * minutesInHour) % secondsInMinute);
    const hours   = Math.floor((timeDifference) / (milliSecondsInSecond * minutesInHour * secondsInMinute) % hoursInDay);
    const days    = Math.floor((timeDifference) / (milliSecondsInSecond * minutesInHour * secondsInMinute * hoursInDay));

    this.date = { seconds, minutes, hours, days };

    Object.keys(this.date).forEach((key: string) => {
      const value = this.date[key];

      if (value < 10) { this.date[key] = '0' + value; }
      if (value < 0) { this.date[key] = '00'; }
    });

    if (timeDifference < 0 && this.subscription) {
      this.finish.emit();
      this.subscription.unsubscribe();
    }

    this.cdr.markForCheck();
  }
}
