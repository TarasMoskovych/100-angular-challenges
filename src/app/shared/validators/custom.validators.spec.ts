import { AbstractControl } from '@angular/forms';
import { CustomValidators } from './custom.validators';

describe('CustomValidators', () => {
  describe('oneCapitalLetterOrMore', () => {
    it('should return null when is valid', () => {
      expect(CustomValidators.oneCapitalLetterOrMore({ value: 'A' } as AbstractControl)).toBeNull();
    });

    it('should return error object when is invalid', () => {
      expect(CustomValidators.oneCapitalLetterOrMore({ value: 'a*1' } as AbstractControl)).toEqual({ oneCapitalLetterOrMore: true });
    });
  });

  describe('oneNumberOrMore', () => {
    it('should return null when is valid', () => {
      expect(CustomValidators.oneNumberOrMore({ value: '1' } as AbstractControl)).toBeNull();
    });

    it('should return error object when is invalid', () => {
      expect(CustomValidators.oneNumberOrMore({ value: 'aA*' } as AbstractControl)).toEqual({ oneNumberOrMore: true });
    });
  });

  describe('oneSpecialCharacterOrMore', () => {
    it('should return null when is valid', () => {
      expect(CustomValidators.oneSpecialCharacterOrMore({ value: '*' } as AbstractControl)).toBeNull();
    });

    it('should return error object when is invalid', () => {
      expect(CustomValidators.oneSpecialCharacterOrMore({ value: 'aA1' } as AbstractControl)).toEqual({ oneSpecialCharacterOrMore: true });
    });
  });
});
