import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
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
      schemas: [NO_ERRORS_SCHEMA],
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
      jest.spyOn(component.closeModal, 'emit');
    });

    it('should be opened', () => {
      expect(el.query(By.css('.modal__wrapper'))).toBeTruthy();
    });

    it('should close on button click', () => {
      el.query(By.css('.modal__title-close-icon')).triggerEventHandler('click', null);

      expect(component.opened).toBeFalsy();
      expect(component.closeModal.emit).toHaveBeenCalled();
    });
  });

  describe('closed', () => {
    beforeEach(() => {
      fixture.detectChanges();
      jest.spyOn(component.openModal, 'emit');
    });

    it('should be closed', () => {
      expect(el.query(By.css('.modal__wrapper'))).toBeFalsy();
    });

    it('should open', () => {
      component.open();

      expect(component.opened).toBeTruthy();
      expect(component.openModal.emit).toHaveBeenCalled();
    });
  });
});
