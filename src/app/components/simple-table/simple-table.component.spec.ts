import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { testUser } from 'src/app/services';
import { SimpleTableComponent } from './simple-table.component';

describe('SimpleTableComponent', () => {
  let component: SimpleTableComponent;
  let fixture: ComponentFixture<SimpleTableComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleTableComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTableComponent);
    component = fixture.componentInstance;
    component.data = [testUser];
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a table', () => {
    const th: DebugElement[] = el.queryAll(By.css('thead th'));
    const td: DebugElement[] = el.queryAll(By.css('td'));

    Object.keys(component.data[0]).forEach((key: string, idx: number) => {
      expect(th[idx].nativeElement.textContent).toBe(key);
      expect(td[idx].nativeElement.textContent).toBe(component.data[0][key]);
    });
  });
});
