import { FlattenPipe } from './flatten.pipe';

describe('FlattenPipe', () => {
  let pipe: FlattenPipe;

  beforeEach(() => {
    pipe = new FlattenPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should flatten array', () => {
    expect(pipe.transform([['a'], ['b', [[[[[['c']]]]]]]])).toEqual(['a', 'b', 'c']);
  });
});
