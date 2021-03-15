import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { EmailFormComponent } from './email-form.component';

describe('EmailFormComponent', () => {
  let component: EmailFormComponent;
  let fixture: ComponentFixture<EmailFormComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [EmailFormComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailFormComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();

    spyOn(component.submit, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have disabled button by default', () => {
    expect(el.query(By.css('button')).nativeElement.disabled).toBeTrue();
  });

  it('should have disabled button when some required field is invalid', () => {
    const inputs: DebugElement[] = el.queryAll(By.css('input'));

    inputs[0].nativeElement.value = 'Test';
    inputs[0].triggerEventHandler('input', { target: inputs[0].nativeElement });
    inputs[1].nativeElement.value = 'abc';
    inputs[1].triggerEventHandler('input', { target: inputs[1].nativeElement });
    component.form.markAllAsTouched();
    fixture.detectChanges();

    expect(component.isInvalid('name')).toBeFalse();
    expect(component.isInvalid('email')).toBeTrue();
    expect(el.query(By.css('button')).nativeElement.disabled).toBeTrue();
  });

  it('should submit the form', () => {
    const inputs: DebugElement[] = el.queryAll(By.css('input'));

    inputs[0].nativeElement.value = 'Test';
    inputs[0].triggerEventHandler('input', { target: inputs[0].nativeElement });
    inputs[1].nativeElement.value = 'abc@gmail.com';
    inputs[1].triggerEventHandler('input', { target: inputs[1].nativeElement });

    fixture.detectChanges();
    el.query(By.css('button')).nativeElement.click();

    expect(component.submit.emit).toHaveBeenCalledOnceWith({ name: 'Test', email: 'abc@gmail.com', message: '' });
    expect(el.query(By.css('button')).nativeElement.disabled).toBeFalse();
  });
});
