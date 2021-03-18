import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CountdownTimerComponent } from './countdown-timer.component';

describe('CountdownTimerComponent', () => {
  let component: CountdownTimerComponent;
  let fixture: ComponentFixture<CountdownTimerComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    spyOn(component.finish, 'emit');
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should emit "finish" when time is expired', waitForAsync(() => {
    component.time = 'Jan 01 2021 00:00:00';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.finish.emit).toHaveBeenCalledTimes(1);
      el.queryAll(By.css('.countdown-timer__time')).forEach((time: DebugElement) => {
        expect(time.query(By.css('h2')).nativeElement.textContent).toContain('00');
      });
    });
  }));

  it('should render countdown for day after tomorrow', () => {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 2);
    component.time = new Date(deadline.getTime()).toString();

    fixture.detectChanges();

    const times: DebugElement[] = el.queryAll(By.css('.countdown-timer__time'));

    expect(times[0].nativeElement.textContent).toContain('01');
    expect(times[1].nativeElement.textContent).toContain('23');
    expect(times[2].nativeElement.textContent).toContain('59');
    expect(times[3].nativeElement.textContent).toContain('59');
  });
});
