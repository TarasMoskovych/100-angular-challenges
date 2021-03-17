import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SimplePopupComponent } from './simple-popup.component';

describe('SimplePopupComponent', () => {
  let component: SimplePopupComponent;
  let fixture: ComponentFixture<SimplePopupComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [SimplePopupComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePopupComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show text on "mouseover"', () => {
    el.query(By.css('.simple-popup > div')).triggerEventHandler('mouseover', null);
    fixture.detectChanges();

    expect(el.query(By.css('.simple-popup__text')).nativeElement.textContent).toContain(component.text);
  });

  it('should hide on "mouseleave"', () => {
    el.query(By.css('.simple-popup > div')).triggerEventHandler('mouseleave', null);
    fixture.detectChanges();

    expect(el.query(By.css('.simple-popup__text'))).toBeFalsy();
  });

  it('should open popup on click and close it after 2s', fakeAsync(() => {
    el.query(By.css('.simple-popup > div')).triggerEventHandler('click', null);
    fixture.detectChanges();
    component.onTogglePopup(false);

    expect(component.showPopup).toBeTrue();

    tick(2000);
    fixture.detectChanges();

    expect(component.showPopup).toBeFalse();
  }));
});
