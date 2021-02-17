import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProgressBarComponent } from './progress-bar.component';

@Component({
  template: `<app-progress-bar [value]="value"></app-progress-bar>`
})
class TestHostComponent {
  value = 25;
}

describe('ProgressBarComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProgressBarComponent,
        TestHostComponent,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display value', () => {
    expect(el.query(By.css('.progress-bar__value')).nativeElement.textContent).toContain(component.value + '%');
  });

  it('should display width relative to value', () => {
    expect(el.query(By.css('.progress-bar__status')).nativeElement.style.width).toBe(component.value + '%');
  });
});
