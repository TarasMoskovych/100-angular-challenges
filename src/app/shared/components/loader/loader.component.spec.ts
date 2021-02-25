import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LoaderType } from './loader-type.model';
import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be hidden by default', () => {
    fixture.detectChanges();
    expect(el.query(By.css('.loader'))).toBeNull();
  });

  it('should be visible', () => {
    component.shown = true;
    fixture.detectChanges();
    expect(el.query(By.css('.loader'))).toBeTruthy();
  });

  describe('mode', () => {
    beforeEach(() => {
      component.shown = true;
    });

    it('should be a "circular"', () => {
      component.type = LoaderType.Circular;
      fixture.detectChanges();

      expect(el.query(By.css('.loader__circle'))).toBeTruthy();
    });

    it('should be a "loading"', () => {
      component.type = LoaderType.Loading;
      fixture.detectChanges();

      expect(el.query(By.css('.loader__text'))).toBeTruthy();
    });

    afterEach(() => {
      expect(el.queryAll(By.css('.loader > div')).length).toBe(1);
    });
  });
});
