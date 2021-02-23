import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LinkedinPostComponent } from './linkedin-post.component';

describe('LinkedinPostComponent', () => {
  let component: LinkedinPostComponent;
  let fixture: ComponentFixture<LinkedinPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedinPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct url', () => {
    expect(fixture.debugElement.query(By.css('a')).nativeElement.href).toContain(`https://www.linkedin.com/sharing/share-offsite`);
  });
});
