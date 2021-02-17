import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionItem } from './accordion-item.model';
import { AccordionComponent } from './accordion.component';

const items: AccordionItem[] = [
  {
    title: 'title1',
    content: 'content1',
    opened: true,
  },
  {
    title: 'title2',
    content: 'content2',
  },
];

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;
  let el: DebugElement;
  let panels: DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [AccordionComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    component.items = items;
    el = fixture.debugElement;
    fixture.detectChanges();
    panels = el.queryAll(By.css('.accordion__item'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have two panels', () => {
    expect(panels.length).toBe(items.length);
  });

  it('should have first panel expanded', () => {
    expect(panels[0].nativeElement.classList).toContain('accordion__item--opened');
    expect(panels[0].query(By.css('.accordion__content')).nativeElement.textContent).toContain(items[0].content);
  });

  it('should expand second panel', () => {
    panels[1].query(By.css('.accordion__title-icon')).triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(panels[1].query(By.css('.accordion__content')).nativeElement.textContent).toContain(items[1].content);
  });
});
