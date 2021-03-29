import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { TitleService } from './services';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  const titleServiceSpy = { init: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      providers: [
        {
          provide: TitleService,
          useValue: titleServiceSpy,
        }
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call titleService on init', () => {
    expect(titleServiceSpy.init).toHaveBeenCalled();
  });

  it('should toggle toolbar state', () => {
    component.onToggle(true);
    expect(component.toolbarOpened).toBe(true);
  });
});
