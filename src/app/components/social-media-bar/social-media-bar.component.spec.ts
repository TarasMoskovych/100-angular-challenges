import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SocialMediaBarComponent } from './social-media-bar.component';

describe('SocialMediaBarComponent', () => {
  let component: SocialMediaBarComponent;
  let fixture: ComponentFixture<SocialMediaBarComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaBarComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render when empty list', () => {
    fixture.detectChanges();
    expect(el.query(By.css('.social-media-bar'))).toBeFalsy();
  });

  describe('render', () => {
    beforeEach(() => {
      component.socials = [ { icon: '', href: '#', color: '' }, { icon: '', href: '#', color: '' } ];
      fixture.detectChanges();
    });

    it('should be rendered', () => {
      expect(el.query(By.css('.social-media-bar'))).toBeTruthy();
    });

    it('should render all items', () => {
      expect(el.queryAll(By.css('.social-media-bar__item')).length).toBe(component.socials.length);
    });
  });
});
