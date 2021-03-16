import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BannerCutOutComponent } from './banner-cut-out.component';

describe('BannerCutOutComponent', () => {
  let component: BannerCutOutComponent;
  let fixture: ComponentFixture<BannerCutOutComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerCutOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCutOutComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be rendered', () => {
    const banner: HTMLElement = el.query(By.css('.banner-cut-out')).nativeElement;

    expect(banner.textContent).toContain(component.text);
    expect(banner.style.backgroundImage).toContain(component.src);
  });
});
