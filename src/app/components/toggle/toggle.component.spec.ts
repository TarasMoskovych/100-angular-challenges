import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ToggleComponent } from './toggle.component';

describe('ToggleComponent', () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be checked', () => {
    component.checked = true;
    fixture.detectChanges();

    expect(el.query(By.css('input')).nativeElement.checked).toBeTrue();
  });

  describe('unchecked', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should be unchecked by default', () => {
      expect(el.query(By.css('input')).nativeElement.checked).toBeFalse();
    });

    it('should emit "true"', () => {
      spyOn(component.check, 'emit');
      el.query(By.css('input')).triggerEventHandler('change', null);
      fixture.detectChanges();

      expect(el.query(By.css('input')).nativeElement.checked).toBeTrue();
      expect(component.check.emit).toHaveBeenCalledOnceWith(true);
    });
  });
});
