import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FieldsetComponent } from './fieldset.component';

describe('FieldsetComponent', () => {
  let component: FieldsetComponent;
  let fixture: ComponentFixture<FieldsetComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [FieldsetComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsetComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('expanded', () => {
    beforeEach(() => {
      component.header = 'Custom header';
      fixture.detectChanges();
    });

    it('should be opened by default', () => {
      expect(el.query(By.css('.fieldset__content'))).toBeTruthy();
    });

    it('should return correct icon', () => {
      expect(el.query(By.css('.fieldset__toggle i')).nativeElement.classList).toContain('fa-minus');
    });

    it('should have custom header', () => {
      expect(el.query(By.css('.fieldset__toggle')).nativeElement.textContent).toContain(component.header);
    });
  });

  describe('collapsed', () => {
    beforeEach(() => {
      component.expanded = false;
      fixture.detectChanges();
    });

    it('should be collapsed', () => {
      expect(el.query(By.css('.fieldset__content'))).toBeFalsy();
    });

    it('should return correct icon', () => {
      expect(el.query(By.css('.fieldset__toggle i')).nativeElement.classList).toContain('fa-plus');
    });
  });

  describe('toggle', () => {
    beforeAll(() => {
      expect(component.expanded).toBeTruthy();
    });
  });

  it('should be collapsed on click', () => {
    el.query(By.css('.fieldset__toggle')).triggerEventHandler('click', null);
    expect(component.expanded).toBeFalsy();
  });
});
