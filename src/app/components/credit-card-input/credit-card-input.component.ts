import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CreditCard } from './credit-card.model';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditCardInputComponent {
  @Input() value = '';
  @Input() set readonly(value: boolean) {
    this.isReadonly = value;

    if (value) {
      this.formatCardNumber();
    }
  }

  get readonly(): boolean {
    return this.isReadonly;
  }

  private isReadonly = false;
  private cards: CreditCard[] = [
    {
      re: /^4[0-9]{12}(?:[0-9]{3})?$/,
      icon: 'fab fa-cc-visa',
    },
    {
      re: /^5[1-5][0-9]{14}$/,
      icon: 'fab fa-cc-mastercard',
    },
    {
      re: /^3[47][0-9]{13}$/,
      icon: 'fab fa-cc-amex',
    },
    {
      re: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
      icon: 'fab fa-cc-discover',
    },
  ];

  get cardIcon(): string {
    let icon = 'fas fa-credit-card';

    this.cards.forEach((card: CreditCard) => {
      if (card.re.test(this.value)) {
        icon = card.icon;
        return;
      }
    });

    return icon;
  }

  private formatCardNumber(): void {
    const parts = this.value.match(/[\s\S]{1,4}/g) || [];
    this.value = parts.map((part: string, idx: number) => {
      if (idx === parts.length - 1) {
        return part;
      }

      return 'xxxx';
    }).join('-');
  }
}
