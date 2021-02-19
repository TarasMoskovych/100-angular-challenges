import { CreditCardFormatterPipe } from './credit-card-formatter.pipe';

describe('CreditCardFormatterPipe', () => {
  let pipe: CreditCardFormatterPipe;

  beforeEach(() => {
    pipe = new CreditCardFormatterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return formatted value', () => {
    expect(pipe.transform('111122223333444')).toBe('1111-2222-3333-444');
  });

  it('should return error when invalid length', () => {
    expect(pipe.transform('11112222333344445')).toBe('Invalid Card length');
  });

  it('should return error when invalid character', () => {
    expect(pipe.transform('1111222233334444*')).toBe('Invalid Characters');
  });
});
