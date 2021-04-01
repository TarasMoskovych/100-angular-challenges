import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CounterComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    component.max = 3;
    component.value = 1;
    el = fixture.debugElement;
    fixture.detectChanges();

    jest.spyOn(component.changeCounter, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onDecrease', () => {
    it('should emit "change" and update value', () => {
      el.query(By.css('.counter__minus')).triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(component.changeCounter.emit).toHaveBeenCalledWith(0);
    });

    it('should not emit "change" when current value equals max', () => {
      component.value = 0;

      el.query(By.css('.counter__minus')).triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(component.changeCounter.emit).not.toHaveBeenCalled();
      expect(component.value).toBe(0);
    });
  });

  describe('onIncrease', () => {
    it('should emit "change" and update value', () => {
      el.query(By.css('.counter__plus')).triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(component.changeCounter.emit).toHaveBeenCalledWith(2);
    });

    it('should not emit "change" when current value equals min', () => {
      component.value = 3;

      el.query(By.css('.counter__plus')).triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(component.changeCounter.emit).not.toHaveBeenCalled();
      expect(component.value).toBe(3);
    });
  });
});
