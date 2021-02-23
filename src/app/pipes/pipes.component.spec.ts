import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesComponent } from './pipes.component';
import {
  CreditCardFormatterPipe,
  FlattenPipe,
  TruncatePipe,
} from '.';

describe('PipesComponent', () => {
  let component: PipesComponent;
  let fixture: ComponentFixture<PipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PipesComponent,
        CreditCardFormatterPipe,
        FlattenPipe,
        TruncatePipe,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
