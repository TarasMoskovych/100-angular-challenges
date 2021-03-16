import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonToggle, ButtonToggleComponent } from './button-toggle.component';

const buttons: ButtonToggle[] = [
  {
    id: '1',
    text: 'Text 1',
  },
  {
    id: '2',
    text: 'Text 2',
  },
];

describe('ButtonToggleComponent', () => {
  let component: ButtonToggleComponent;
  let fixture: ComponentFixture<ButtonToggleComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonToggleComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    component.buttons = buttons;
    fixture.detectChanges();

    spyOn(component.buttonClick, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit "click" and become active', () => {
    const button: DebugElement = el.query(By.css('button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(button.nativeElement.classList).toContain('active');
    expect(component.buttonClick.emit).toHaveBeenCalledOnceWith(buttons[0]);
  });
});
