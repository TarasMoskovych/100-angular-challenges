import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TopOfPageComponent } from './top-of-page.component';

describe('TopOfPageComponent', () => {
  let component: TopOfPageComponent;
  let fixture: ComponentFixture<TopOfPageComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopOfPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopOfPageComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should scroll to top on click', () => {
    jest.spyOn(component['viewportScroller'], 'scrollToPosition');
    el.query(By.css('.top-of-page')).triggerEventHandler('click', null);

    expect(component['viewportScroller'].scrollToPosition).toHaveBeenCalledTimes(1);
  });

  it('should be visible while scrolling', () => {
    jest.spyOn(component['viewportScroller'], 'getScrollPosition').mockReturnValue([400, 400]);
    window.dispatchEvent(new Event('scroll'));
    fixture.detectChanges();

    expect(component.visible).toBeTruthy();
    expect(el.query(By.css('.top-of-page')).nativeElement.classList).toContain('top-of-page--visible');
  });
});
