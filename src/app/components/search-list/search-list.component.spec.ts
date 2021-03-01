import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SharedModule } from 'src/app/shared/shared.module';
import { SearchListComponent } from './search-list.component';

describe('SearchListComponent', () => {
  let component: SearchListComponent;
  let fixture: ComponentFixture<SearchListComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [SearchListComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    component.values = ['TypeScript', 'JavaScript', 'Java'];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render items filtered by seacrh term', () => {
    component.onSearchSelect('script', true);
    fixture.detectChanges();

    expect(el.queryAll(By.css('li')).length).toBe(2);
  });

  it('should render "No results found"', () => {
    component.onSearchSelect('test', true);
    fixture.detectChanges();

    expect(el.queryAll(By.css('li')).length).toBe(1);
    expect(el.query(By.css('li')).nativeElement.textContent).toContain('No results found');
  });

  it('should close the list and update selected value on item click"', () => {
    component.onSearchSelect('script', true);
    fixture.detectChanges();
    el.queryAll(By.css('li'))[0].triggerEventHandler('click', null);

    expect(component.search).toBe('TypeScript');
  });
});
