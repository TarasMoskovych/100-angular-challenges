import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { RichTextViewerComponent } from './rich-text-viewer.component';

describe('RichTextViewerComponent', () => {
  let component: RichTextViewerComponent;
  let fixture: ComponentFixture<RichTextViewerComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RichTextViewerComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RichTextViewerComponent);
    component = fixture.componentInstance;
    component.value = `<h2 style="color: green;">Content</h2>`;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render html', () => {
    expect(el.query(By.css('.rich-text-viewer__view div')).nativeElement.innerHTML).toBe(component.value);
  });

  it('should render html on input', () => {
    const textarea = el.query(By.css('.rich-text-viewer__textarea'));
    const html = '<span>Custom content</span>';

    textarea.nativeElement.value = html;
    textarea.triggerEventHandler('debouncedEvent', null);
    fixture.detectChanges();

    expect(el.query(By.css('.rich-text-viewer__view div')).nativeElement.innerHTML).toBe(html);
  });
});
