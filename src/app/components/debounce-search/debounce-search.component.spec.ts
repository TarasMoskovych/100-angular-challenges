import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DebounceSearchComponent } from './debounce-search.component';

@Component({
  template: '<app-debounce-search [value]="value" (search)="onSearch($event)"></app-debounce-search>',
})
class TestHostComponent {
  value = 'Test value';

  onSearch(value: string) { }
}

describe('DebounceSearchComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestHostComponent, DebounceSearchComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();

    spyOn(component, 'onSearch');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update value', fakeAsync(() => {
    const value = 'New value';
    const input: HTMLInputElement = el.query(By.css('input')).nativeElement;
    input.value = value;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    tick(250);
    expect(component.onSearch).toHaveBeenCalledOnceWith(value);
  }));

  it('should clear the value', fakeAsync(() => {
    el.query(By.css('i')).triggerEventHandler('click', null);

    tick(250);
    expect(component.onSearch).toHaveBeenCalledOnceWith('');
  }));
});
