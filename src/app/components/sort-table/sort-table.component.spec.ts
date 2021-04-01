import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { testUser, testUser2 } from 'src/app/services';
import { SortTableComponent } from './sort-table.component';

@Component({
  template: '<app-sort-table [sortedBy]="sortedBy" [data]="data"></app-sort-table>'
})
class TestHostComponent {
  data = [testUser, testUser2];
  sortedBy = 'name';
}

describe('SortTableComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let sortTableComponent: SortTableComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent, SortTableComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    sortTableComponent = fixture.debugElement.query(By.directive(SortTableComponent)).injector.get(SortTableComponent);
  });

  it('should create', () => {
    expect(sortTableComponent).toBeTruthy();
  });

  describe('default', () => {
    beforeEach(() => {
      component.sortedBy = '';
      fixture.detectChanges();
    });

    it('should be sorted by name in asc order', () => {
      sortTableComponent.onSort({ key: 'name', asc: true });

      expect(sortTableComponent.data).toEqual([testUser2, testUser]);
    });
  });

  describe('initial sorted', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should be sorted by name by default', () => {
      expect(sortTableComponent.data).toEqual([testUser2, testUser]);
    });

    it('should sort by name and ignore argument when sort key is presented in "titleMap"', () => {
      // tslint:disable-next-line
      sortTableComponent['titleMap'] = { name: false };
      sortTableComponent.onSort({ key: 'name', asc: false });

      expect(sortTableComponent.data).toEqual([testUser2, testUser]);
    });

    it('should sort by email in desc order and delete previous sorts', () => {
      // tslint:disable-next-line
      sortTableComponent['titleMap'] = { name: false };
      sortTableComponent.onSort({ key: 'email', asc: false });

      expect(sortTableComponent.data).toEqual([testUser, testUser2]);
      // tslint:disable-next-line
      expect(sortTableComponent['titleMap']).toEqual({ email: false });
    });
  });
});
