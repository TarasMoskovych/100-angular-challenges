import { SortByKeyPipe } from './sort-by-key.pipe';

describe('SortByKeyPipe', () => {
  let pipe: SortByKeyPipe;

  beforeAll(() => {
    pipe = new SortByKeyPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('invalid data', () => {
    it('should return null', () => {
      expect(pipe.transform(null as any)).toBeNull();
    });

    it('should throw an error', () => {
      expect(() => pipe.transform(5 as any)).toThrowError('Should be array');
    });
  });

  describe('sort', () => {
    it('should return original order when prop does not exist', () => {
      const data = [{ name: 'a' }, { name: 'b' }];
      jest.spyOn(console, 'warn');

      expect(pipe.transform(data)).toEqual(data);
      expect(console.warn).toHaveBeenCalled();
    });

    it('should sort by string in ascending order', () => {
      expect(pipe.transform([{ name: 'a' }, { name: 'c' }, { name: 'b' }], 'name')).toEqual([{ name: 'a' }, { name: 'b' }, { name: 'c' }]);
    });

    it('should sort by string in descending order', () => {
      expect(pipe.transform([{ name: 'a' }, { name: 'c' }, { name: 'b' }], 'name', false)).toEqual([{ name: 'c' }, { name: 'b' }, { name: 'a' }]);
    });

    it('should sort by number in ascending order', () => {
      expect(pipe.transform([{ id: 2 }, { id: 1 }, { id: 3 }], 'id')).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
    });

    it('should sort by number in descending order', () => {
      expect(pipe.transform([{ id: 2 }, { id: 1 }, { id: 3 }], 'id', false)).toEqual([{ id: 3 }, { id: 2 }, { id: 1 }]);
    });
  });
});
