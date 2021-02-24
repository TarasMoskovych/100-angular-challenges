import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { AccordionComponent } from './accordion.component';

@Component({
  template: `
    <app-accordion>
      <app-accordion-item *ngFor="let item of items; let idx = index" [title]="item.title" [opened]="item.opened">
        <ng-template>Content {{ idx + 1 }}</ng-template>
      </app-accordion-item>
    </app-accordion>
  `
})
class TestHostComponent {
  items: Object[] = [
    {
      title: 'title1',
      opened: true,
    },
    {
      title: 'title2',
    },
  ];
}

describe('AccordionComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let el: DebugElement;
  let panels: DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [AccordionComponent, AccordionItemComponent, TestHostComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
    panels = el.queryAll(By.css('.accordion__item'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have two panels', () => {
    expect(panels.length).toBe(component.items.length);
  });

  it('should have first panel expanded', () => {
    expect(panels[0].query(By.css('.accordion__title-icon')).nativeElement.classList).toContain('accordion__title-icon--opened');
    expect(panels[0].query(By.css('.accordion__content')).nativeElement.textContent).toContain('Content 1');
  });

  it('should expand second panel', () => {
    panels[1].query(By.css('.accordion__title-icon')).triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(panels[1].query(By.css('.accordion__title-icon')).nativeElement.classList).toContain('accordion__title-icon--opened');
    expect(panels[1].query(By.css('.accordion__content')).nativeElement.textContent).toContain('Content 2');
  });
});
