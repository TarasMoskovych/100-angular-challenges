import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { CreditCardInputComponent } from './credit-card-input.component';

describe('CreditCardInputComponent', () => {
  let component: CreditCardInputComponent;
  let fixture: ComponentFixture<CreditCardInputComponent>;
  let icon: HTMLElement;
  let input: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CreditCardInputComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardInputComponent);
    component = fixture.componentInstance;
    icon = fixture.debugElement.query(By.css('i')).nativeElement;
    input = fixture.debugElement.query(By.css('input')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('edit mode', () => {
    it('should render mastercard icon', () => {
      component.value = '5280934283171080';
      fixture.detectChanges();

      expect(icon.classList).toContain('fa-cc-mastercard');
    });

    it('should render visa icon', () => {
      component.value = '4916338506082832';
      fixture.detectChanges();

      expect(icon.classList).toContain('fa-cc-visa');
    });

    it('should render amex icon', () => {
      component.value = '345936346788903';
      fixture.detectChanges();

      expect(icon.classList).toContain('fa-cc-amex');
    });

    it('should render discover icon', () => {
      component.value = '6011894492395579';
      fixture.detectChanges();

      expect(icon.classList).toContain('fa-cc-discover');
    });

    it('should render default icon', () => {
      component.value = '3528000000000000';
      fixture.detectChanges();

      expect(icon.classList).toContain('fa-credit-card');
    });
  });

  describe('readonly mode', () => {
    it('should format card number', waitForAsync(() => {
      component.value = '5280934283171080';
      component.readonly = true;
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(input.value).toBe('xxxx-xxxx-xxxx-1080');
      });
    }));

    it('should work when empty value', () => {
      component.readonly = true;
      fixture.detectChanges();

      expect(component.value).toBe('');
    });
  });
});
