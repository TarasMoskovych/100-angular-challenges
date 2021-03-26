import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { PasswordComponent } from './password.component';

describe('PasswordComponent', () => {
  let component: PasswordComponent;
  let fixture: ComponentFixture<PasswordComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [PasswordComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('type', () => {
    describe('password', () => {
      it('should have type "password" by default', () => {
        expect(el.query(By.css('.password__input')).nativeElement.type).toBe('password');
      });

      it('should have correct icon class', () => {
        expect(el.query(By.css('.password__input-icon--right')).nativeElement.classList).toContain('fa-eye');
      });
    });

    describe('text', () => {
      beforeEach(() => {
        el.query(By.css('.password__input-icon--right')).triggerEventHandler('click', null);
        fixture.detectChanges();
      });

      it('should have type "text" by default', () => {
        expect(el.query(By.css('.password__input')).nativeElement.type).toBe('text');
      });

      it('should have correct icon class', () => {
        expect(el.query(By.css('.password__input-icon--right')).nativeElement.classList).toContain('fa-eye-slash');
      });
    });
  });

  describe('status', () => {
    let input: HTMLInputElement;

    beforeEach(() => {
      input = el.query(By.css('.password__input')).nativeElement;
    });

    it('should return 1', () => {
      input.value = 'test';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(component.status).toBe(1);
    });

    it('should return 100', () => {
      input.value = 'aaAA**1';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(component.status).toBe(100);
    });
  });

  describe('messages', () => {
    let input: HTMLInputElement;
    let message: DebugElement;

    beforeEach(() => {
      input = el.query(By.css('.password__input')).nativeElement;
      message = el.query(By.css('.password__message'));
    });

    it('should display 4 errors when focus out', () => {
      component.form.markAllAsTouched();
      fixture.detectChanges();

      expect(message.queryAll(By.css('div')).length).toBe(4);
    });

    it('should display 4 errors when invalid input', () => {
      input.value = 'aaa';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(message.queryAll(By.css('div')).length).toBe(4);
    });

    it('should display 3 errors when invalid input', () => {
      input.value = 'aaaaaaa';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(message.queryAll(By.css('div')).length).toBe(3);
    });

    it('should display 2 errors when invalid input', () => {
      input.value = 'aaaaaaa2';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(message.queryAll(By.css('div')).length).toBe(2);
    });

    it('should display 1 error when invalid input', () => {
      input.value = 'aaaaaaa2A';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(message.queryAll(By.css('div')).length).toBe(1);
    });

    it('should not display any errors when valid input', () => {
      input.value = 'aaaaaaa2A*';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(message.queryAll(By.css('div')).length).toBe(0);
    });
  });
});
