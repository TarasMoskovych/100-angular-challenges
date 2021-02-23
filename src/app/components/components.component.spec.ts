import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LoaderType } from '../shared';
import { ComponentsComponent } from './components.component';

describe('ComponentsComponent', () => {
  let component: ComponentsComponent;
  let fixture: ComponentFixture<ComponentsComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update value', () => {
    component.onUpdate();
    expect(component.value).toBeTruthy();
  });

  describe('change loader', () => {
    let btn: DebugElement;

    beforeEach(() => {
      btn = el.query(By.css('.change-loader'));
    });

    it('should change loader to "loading"', () => {
      component.loaderType = LoaderType.Circular;
      btn.triggerEventHandler('click', null);

      expect(component.loaderType).toBe(LoaderType.Loading);
    });

    it('should change loader to "circular"', () => {
      component.loaderType = LoaderType.Loading;
      btn.triggerEventHandler('click', null);

      expect(component.loaderType).toBe(LoaderType.Circular);
    });
  });
});
