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

    spyOn(component.sort, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('simple table', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should render a table', () => {
      const th: DebugElement[] = el.queryAll(By.css('thead th'));
      const td: DebugElement[] = el.queryAll(By.css('td'));

      Object.keys(component.data[0]).forEach((key: string, idx: number) => {
        expect(th[idx].nativeElement.textContent).toContain(key);
        expect(td[idx].nativeElement.textContent).toContain(component.data[0][key]);
      });
    });

    it('should not emit "sort"', () => {
      el.query(By.css('th')).triggerEventHandler('click', null);
      expect(component.sort.emit).not.toHaveBeenCalled();
    });
  });

  describe('with sorting', () => {
    let th: DebugElement;
    let icon: HTMLElement;

    const triggerEvent = () => {
      fixture.detectChanges();
      th = el.query(By.css('th'));
      th.triggerEventHandler('click', null);
      icon = th.query(By.css('i')).nativeElement;
    };

    beforeEach(() => {
      component.sorted = true;
    });

    it('should have up arrow and emit "sort"', () => {
      component.asc = true;

      triggerEvent();
      expect(icon.classList).toContain('asc');
    });

    it('should have down arrow and emit "sort"', () => {
      triggerEvent();
      expect(icon.classList).not.toContain('asc');
    });

    afterEach(() => {
      expect(component.sort.emit).toHaveBeenCalledOnceWith({ key: 'name', asc: component.asc });
      expect(icon.classList).toContain('fa-arrow-down');
    });
  });
});
