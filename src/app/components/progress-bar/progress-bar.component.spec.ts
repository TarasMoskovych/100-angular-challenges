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
  let progressBar: ProgressBarComponent;
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
    progressBar = el.query(By.directive(ProgressBarComponent)).injector.get(ProgressBarComponent);
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

  describe('style', () => {
    it('should return default value', () => {
      expect(progressBar.style['background-color']).toBe('#007acc');
    });

    describe('colored', () => {
      beforeEach(() => {
        progressBar.colored = true;
      });

      it('should return "green"', () => {
        progressBar.value = 100;
        expect(progressBar.style['background-color']).toBe('#40c980');
      });

      it('should return "yellow"', () => {
        progressBar.value = 99;
        expect(progressBar.style['background-color']).toBe('#e5e510');
      });

      it('should return "c97e5a"', () => {
        progressBar.value = 74;
        expect(progressBar.style['background-color']).toBe('#c97e5a');
      });

      it('should return "red"', () => {
        progressBar.value = 49;
        expect(progressBar.style['background-color']).toBe('#ff6058');
      });
    });
  });
});
