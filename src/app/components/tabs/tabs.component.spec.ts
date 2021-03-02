import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Tab, TabsComponent } from './tabs.component';

@Component({
  template: `
    <app-tabs [tabs]="tabs">
      <ng-template>
        <p>Content 1</p>
      </ng-template>
      <ng-template>
        <p>Content 2</p>
      </ng-template>
    </app-tabs>
  `
})
class TestHostComponent {
  tabs: Tab[] = [
    {
      title: 'Tab 1',
    },
    {
      title: 'Tab 2',
      active: true,
    },
  ];
}

describe('TabsComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent, TabsComponent],
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

  it('should have active second tab', () => {
    expect(el.query(By.css('.tabs__item--active')).nativeElement.textContent).toContain(component.tabs[1].title);
    expect(el.query(By.css('.tabs__content')).nativeElement.textContent).toContain('Content 2');
  });

  it('should select first tab and render its content', () => {
    el.query(By.css('.tabs__item')).triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(el.query(By.css('.tabs__item--active')).nativeElement.textContent).toContain(component.tabs[0].title);
    expect(el.query(By.css('.tabs__content')).nativeElement.textContent).toContain('Content 1');
  });
});
