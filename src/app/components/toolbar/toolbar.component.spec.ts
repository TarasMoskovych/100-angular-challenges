import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ToolbarComponent } from './toolbar.component';

@Component({
  template: `
    <app-toolbar [title]="title">
      <p class="content">Custom content1</p>
      <p class="content">Custom content2</p>
    </app-toolbar>
  `
})
class TestHostComponent {
  title = 'Custom title';
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
});
