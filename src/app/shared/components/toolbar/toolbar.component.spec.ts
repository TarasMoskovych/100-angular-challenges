import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ToolbarComponent } from './toolbar.component';

@Component({
  template: `
    <app-toolbar [title]="title" (toggle)="onToggle($event)">
      <p class="content">Custom content1</p>
      <p class="content">Custom content2</p>
    </app-toolbar>
  `
})
class TestHostComponent {
  title = 'Custom title';

  onToggle(toggler: boolean) {}
}

describe('ToolbarComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        ToolbarComponent,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    fixture.detectChanges();
    expect(el.query(By.css('.toolbar__title')).nativeElement.textContent).toBe(component.title);
  });

  it('should render custom content', () => {
    fixture.detectChanges();
    expect(el.queryAll(By.css('.content')).length).toBe(2);
  });

  describe('content', () => {
    beforeEach(() => {
      spyOn(component, 'onToggle');
    });

    it('should not be shown on mobile devices by default', () => {
      expect(el.query(By.css('.toolbar__content')).nativeElement.classList).not.toContain('toolbar__content--shown');
    });

    it('should be shown on mobile devices on button click', () => {
      el.query(By.css('.toolbar__menu')).triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(el.query(By.css('.toolbar__content')).nativeElement.classList).toContain('toolbar__content--shown');
      expect(component.onToggle).toHaveBeenCalledOnceWith(true);
    });
  });
});
