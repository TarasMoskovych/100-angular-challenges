import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { SnackbarService, testUser, UsersService } from '../services';
import { LoaderType } from '../shared/components';
import { ComponentsComponent } from './components.component';
import { ModalComponent } from './modal/modal.component';

describe('ComponentsComponent', () => {
  let component: ComponentsComponent;
  let fixture: ComponentFixture<ComponentsComponent>;
  let el: DebugElement;
  let snackbarServiceSpy = { show: jest.fn() };
  let userServiceSpy = { get: jest.fn().mockReturnValue(of(testUser)) };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [
        ComponentsComponent,
        ModalComponent,
      ],
      providers: [
        { provide: SnackbarService, useValue: snackbarServiceSpy },
        { provide: UsersService, useValue: userServiceSpy },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
    jest.spyOn(global.console, 'log');
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

  describe('modal', () => {
    it('should open modal', () => {
      el.query(By.css('button.open-modal')).triggerEventHandler('click', null);

      expect(component.modal.opened).toBeTruthy();
      expect(console.log).toHaveBeenCalled();
    });

    it('should close modal"', () => {
      component.onToggleModal();

      expect(component.modal.opened).toBeFalsy();
    });
  });

  it('should update value onSearch', () => {
    const value = 'Test value';
    component.onSearch(value);

    expect(console.log).toHaveBeenCalledWith(value);
    expect(component.search).toBe(value);
  });

  it('should show snackbar "onShowSnackBar" event', () => {
    component.onShowSnackBar(true);
    expect(snackbarServiceSpy.show).toHaveBeenCalled();
  });

  it('should show snackbar "onCountDownFinish" event', () => {
    component.onCountDownFinish();
    expect(snackbarServiceSpy.show).toHaveBeenCalled();
  });

  it('should set bottomSheetOpened to "true"', () => {
    component.onToggleBottomSheet(true);
    expect(component.bottomSheetOpened).toBeTruthy();
  });
});
