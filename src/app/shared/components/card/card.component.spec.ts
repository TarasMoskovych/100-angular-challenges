import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('default inputs', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should not have icon by default', () => {
      expect(el.queryAll(By.css('i')).length).toBe(0);
    });

    it('should have default color by default', () => {
      expect(el.query(By.css('.card__title')).nativeElement.style.backgroundColor).toBe('rgb(64, 201, 128)');
    });
  });

  describe('custom inputs', () => {
    const props = {
      title: 'Title',
      subtitle: 'Test',
      icon: 'fa-exclamation-circle',
      color: 'rgb(255, 0, 0)',
    };

    beforeEach(() => {
      component.title = props.title;
      component.subtitle = props.subtitle;
      component.icon = props.icon;
      component.color = props.color;

      fixture.detectChanges();
    });

    it('should have custom title', () => {
      expect(el.query(By.css('.card__title')).nativeElement.textContent).toContain(props.title);
    });

    it('should have custom subtitle', () => {
      expect(el.query(By.css('.card__title')).nativeElement.textContent).toContain(props.subtitle);
    });

    it('should have custom icon', () => {
      expect(el.query(By.css('i')).nativeElement.classList).toContain(props.icon);
    });

    it('should have custom color', () => {
      expect(el.query(By.css('.card__title')).nativeElement.style.backgroundColor).toBe(props.color);
    });
  });
});
