import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillFiltersComponent } from './pill-filters.component';

describe('PillFiltersComponent', () => {
  let component: PillFiltersComponent;
  let fixture: ComponentFixture<PillFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PillFiltersComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PillFiltersComponent);
    component = fixture.componentInstance;
    component.labels = ['label-1', 'label-2'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have pills based on labels', () => {
    expect(component.pills.length).toBe(2);
  });

  describe('filter', () => {
    beforeEach(() => {
      jest.spyOn(component.selected, 'emit');
    });

    it('should make pill selected', () => {
      component.onFilter({ label: 'label-1' });
      expect(component.pills).toEqual([{ label: 'label-1', selected: true }, { label: 'label-2' }]);
    });

    it('should emit "selected"', () => {
      component.onFilter({ label: 'label-1' });
      expect(component.selected.emit).toHaveBeenCalledWith([{ label: 'label-1', selected: true }]);
    });
  });
});
