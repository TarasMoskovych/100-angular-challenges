import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [ModalComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('opened', () => {
    beforeEach(() => {
      component.opened = true;
      fixture.detectChanges();
      spyOn(component.close, 'emit');
    });

    it('should be opened', () => {
      expect(el.query(By.css('.modal__wrapper'))).toBeTruthy();
    });

    it('should close on button click', () => {
      el.query(By.css('.modal__title-close-icon')).triggerEventHandler('click', null);

      expect(component.opened).toBeFalsy();
      expect(component.close.emit).toHaveBeenCalled();
    });
  });

  describe('closed', () => {
    beforeEach(() => {
      fixture.detectChanges();
      spyOn(component.open, 'emit');
    });

    it('should be closed', () => {
      expect(el.query(By.css('.modal__wrapper'))).toBeFalsy();
    });

    it('should open', () => {
      component.openModal();

      expect(component.opened).toBeTrue();
      expect(component.open.emit).toHaveBeenCalled();
    });
  });
});
