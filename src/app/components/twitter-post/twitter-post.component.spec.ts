import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By, Title } from '@angular/platform-browser';

import { TwitterPostComponent } from './twitter-post.component';

describe('TwitterPostComponent', () => {
  let component: TwitterPostComponent;
  let fixture: ComponentFixture<TwitterPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwitterPostComponent],
      providers: [{
        provide: Title,
        useValue: jasmine.createSpyObj('Title', { getTitle: 'AngularChallenges' }),
      }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct url', () => {
    expect(fixture.debugElement.query(By.css('a')).nativeElement.href).toContain(`https://twitter.com/intent/tweet`);
  });
});
