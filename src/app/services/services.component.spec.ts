import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ServicesComponent } from './services.component';
import { testUser, User } from './users/user.model';
import { LocalStorageService } from './local-storage/local-storage.service';
import { UsersService } from './users/users.service';

describe('ServicesComponent', () => {
  const localStorageSpy = { state$: of({}), update: jest.fn() };
  const userServiceSpy = {
    getOne: jest.fn().mockReturnValue(of(testUser)),
    getById: jest.fn().mockReturnValue(of(testUser)),
  };
  let component: ServicesComponent;
  let fixture: ComponentFixture<ServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
          },
        },
        {
          provide: LocalStorageService,
          useValue: localStorageSpy,
        },
        {
          provide: UsersService,
          useValue: userServiceSpy,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call "update"', () => {
    component.onUpdateState();
    expect(localStorageSpy.update).toHaveBeenCalled();
  });

  it('should get user on init', () => {
    component.selectedUser$.subscribe((user: User) => {
      expect(user).toEqual(testUser);
      expect(userServiceSpy.getById).toHaveBeenCalled();
    });
  });
});
