import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BottomSheetComponent } from './bottom-sheet.component';

describe('BottomSheetComponent', () => {
  let component: BottomSheetComponent;
  let fixture: ComponentFixture<BottomSheetComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [BottomSheetComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be hidden by default', () => {
    fixture.detectChanges();
    expect(el.query(By.css('.bottom-sheet__container'))).toBeFalsy();
  });

  describe('opened', () => {
    beforeEach(() => {
      component.isOpened = true;
      fixture.detectChanges();

      jest.spyOn(component.close, 'emit');
    });

    it('should be opened', () => {
      expect(el.query(By.css('.bottom-sheet__container'))).toBeTruthy();
    });

    it('should emit "close" on click', () => {
      el.query(By.css('app-overlay')).triggerEventHandler('click', null);
      expect(component.close.emit).toHaveBeenCalled();
    });
  });
});
