import { SortByPipe } from './sort-by.pipe';

describe('SortByPipe', () => {
  let error: Error;
  let pipe: SortByPipe;

  beforeAll(() => {
    error = new Error('Should be array');
    pipe = new SortByPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return undefined', () => {
    expect(pipe.transform(undefined as any)).toBeUndefined();
  });

  describe('throw an error', () => {
    it('should throw an error when is not array', () => {
      expect(() => pipe.transform('string' as any)).toThrowError(error);
    });
  });

  describe('sort', () => {
    it('should sort an array in ascending order', () => {
      expect(pipe.transform(['c', 'a', 'b'])).toEqual(['a', 'b', 'c']);
    });

    it('should sort an array in descending order', () => {
      expect(pipe.transform(['c', 'a', 'b'], false)).toEqual(['c', 'b', 'a']);
    });
  });
});
