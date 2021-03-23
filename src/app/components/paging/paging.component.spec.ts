import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PagingComponent } from './paging.component';

describe('PagingComponent', () => {
  let component: PagingComponent;
  let fixture: ComponentFixture<PagingComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagingComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    jest.spyOn(component.pageChange, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onStepDown', () => {
    it('should not emit "pageChange" event when current page equals to clicked', () => {
      fixture.detectChanges();
      component.onStepDown();

      expect(el.query(By.css('button')).nativeElement.disabled).toBeTruthy();
      expect(component.pageChange.emit).not.toHaveBeenCalled();
    });

    it('should emit "pageChange" event and change currentPage to 1', () => {
      component.currentPage = 2;
      fixture.detectChanges();
      el.query(By.css('button')).triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(el.query(By.css('button')).nativeElement.disabled).toBeTruthy();
      expect(component.pageChange.emit).toHaveBeenCalledWith(1);
    });

    it('should emit "pageChange" event and change currentPage to 2', () => {
      component.currentPage = 4;
      fixture.detectChanges();
      el.query(By.css('button')).triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(el.query(By.css('button')).nativeElement.disabled).toBeFalsy();
      expect(component.pageChange.emit).toHaveBeenCalledWith(2);
    });
  });

  describe('onStepUp', () => {
    it('should not emit "pageChange" event when current page equals to clicked', () => {
      component.currentPage = 5;
      fixture.detectChanges();
      component.onStepUp();

      expect(el.query(By.css('li:last-child button')).nativeElement.disabled).toBeTruthy();
      expect(component.pageChange.emit).not.toHaveBeenCalled();
    });

    it('should emit "pageChange" event and change currentPage to 5', () => {
      component.currentPage = 4;
      fixture.detectChanges();
      el.query(By.css('li:last-child button')).triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(el.query(By.css('li:last-child button')).nativeElement.disabled).toBeTruthy();
      expect(component.pageChange.emit).toHaveBeenCalledWith(5);
    });

    it('should emit "pageChange" event and change currentPage to 4', () => {
      component.currentPage = 2;
      fixture.detectChanges();
      el.query(By.css('li:last-child button')).triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(el.query(By.css('li:last-child button')).nativeElement.disabled).toBeFalsy();
      expect(component.pageChange.emit).toHaveBeenCalledWith(4);
    });
  });

  describe('onSelect', () => {
    it('should select third page', () => {
      fixture.detectChanges();
      el.query(By.css('li:nth-child(4) button')).triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(component.pageChange.emit).toHaveBeenCalledWith(3);
    });

    it('should select fourth page', () => {
      fixture.detectChanges();
      el.query(By.css('li:nth-child(5) button')).triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(component.pageChange.emit).toHaveBeenCalledWith(4);
    });

    it('should select second page', () => {
      component.pageSize = 2;
      fixture.detectChanges();
      el.query(By.css('li:nth-child(3) button')).triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(component.pageChange.emit).toHaveBeenCalledWith(2);
    });
  });
});
