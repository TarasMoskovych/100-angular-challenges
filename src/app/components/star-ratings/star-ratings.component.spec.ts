import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StarRatingsComponent } from './star-ratings.component';

describe('StarRatingsComponent', () => {
  let component: StarRatingsComponent;
  let fixture: ComponentFixture<StarRatingsComponent>;
  let el: DebugElement;
  let stars: DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarRatingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarRatingsComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    component.value = 3.5;
    fixture.detectChanges();
    stars = el.queryAll(By.css('i'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render stars', () => {
    expect(stars.length).toBe(component.stars);
  });

  it('should render 3 full stars', () => {
    for (let i = 0; i < 3; i++) {
      expect(stars[i].nativeElement.classList).toContain('fa-star');
    }
  });

  it('should render 1 half star', () => {
    expect(stars[3].nativeElement.classList).toContain('fa-star-half-alt');
  });

  it('should render 1 empty star', () => {
    expect(stars[4].nativeElement.classList).toContain('far');
  });

  describe('getState', () => {
    it('should return state for full star', () => {
      expect(component.getState(0)).toEqual({
        fas: true,
        far: false,
        'fa-star': true,
        'fa-star-half-alt': false,
      });
    });

    it('should return state for half star', () => {
      expect(component.getState(3)).toEqual({
        fas: true,
        far: false,
        'fa-star': false,
        'fa-star-half-alt': true,
      });
    });

    it('should return state for empty star', () => {
      expect(component.getState(4)).toEqual({
        fas: false,
        far: true,
        'fa-star': true,
        'fa-star-half-alt': false,
      });
    });
  });
});
