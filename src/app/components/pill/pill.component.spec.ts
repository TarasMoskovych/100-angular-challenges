import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillComponent, COLORS_MAP, PillType } from './pill.component';

describe('PillComponent', () => {
  let component: PillComponent;
  let fixture: ComponentFixture<PillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit "selectPill"', () => {
    jest.spyOn(component.selectPill, 'emit');

    component.onSelect(component.pill);
    expect(component.selectPill.emit).toHaveBeenCalledWith(component.pill);
  });

  describe('color', () => {
    it('should return default value', () => {
      expect(component.color).toEqual({ 'background-color': COLORS_MAP.info });
    });

    it('should return value based on type', () => {
      component.pill = { label: '', type: PillType.Error };
      expect(component.color).toEqual({ 'background-color': COLORS_MAP.error });
    });
  });
});
