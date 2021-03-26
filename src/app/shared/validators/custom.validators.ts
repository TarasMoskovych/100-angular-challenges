import { AbstractControl } from '@angular/forms';

export class CustomValidators {

  static oneCapitalLetterOrMore(c: AbstractControl): { [key: string]: boolean } | null {
    return /(.*[A-Z].*)/.test(c.value) ? null : { oneCapitalLetterOrMore: true };
  }

  static oneNumberOrMore(c: AbstractControl): { [key: string]: boolean } | null {
    return /(.*\d.*)/.test(c.value) ? null : { oneNumberOrMore: true };
  }

  static oneSpecialCharacterOrMore(c: AbstractControl): { [key: string]: boolean } | null {
    return /\W|_/g.test(c.value) ? null : { oneSpecialCharacterOrMore: true };
  }
}
