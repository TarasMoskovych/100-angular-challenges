import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter'
})
export class CreditCardFormatterPipe implements PipeTransform {

  transform(value: string): string {
    let result = 'Invalid Card length';

    if (value.length === 16 || value.length === 15) {
      result = value.split('').map((value: string, idx: number) => idx % 4 === 0 && idx !== 0 ? '-' + value : value).join('');
    } else if (Number.parseInt(value).toString().length !== value.length) {
      result = 'Invalid Characters';
    }

    return result;
  }
}
