import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  const routerSpy = {
    navigateByUrl: jest.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
      providers: [
        {
          provide: Router,
          useValue: routerSpy,
        },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect after 5s', fakeAsync(() => {
    fixture.detectChanges();
    tick(5000);

    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/components');
  }));
});
