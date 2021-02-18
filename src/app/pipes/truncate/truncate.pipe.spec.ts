import { TruncatePipe } from './truncate.pipe';

const value = '123456789';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should truncate text', () => {
    expect(pipe.transform(value, 5)).toBe('12345...');
  });

  it('should not truncate text', () => {
    expect(pipe.transform(value, 10)).toBe(value);
  });
});
