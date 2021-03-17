import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SnackbarComponent } from './snackbar.component';

describe('SnackbarComponent', () => {
  let component: SnackbarComponent;
  let fixture: ComponentFixture<SnackbarComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [SnackbarComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();

    spyOn(component.afterClosed, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be shown by default', () => {
    expect(el.query(By.css('.snackbar__container')).nativeElement.textContent).toContain(component.message);
  });

  it('should be hidden after 3s and emit "afterClosed"', waitForAsync(() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      expect(el.queryAll(By.css('.snackbar__container')).length).toBe(0);
      expect(component.afterClosed.emit).toHaveBeenCalledTimes(1);
    });
  }));
});
