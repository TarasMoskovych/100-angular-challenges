import { FilterTermPipe } from './filter-term.pipe';

describe('FilterTermPipe', () => {
  let pipe: FilterTermPipe;

  beforeEach(() => {
    pipe = new FilterTermPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return original array when term is not passed', () => {
    expect(pipe.transform(['1', '2', '3'])).toEqual(['1', '2', '3']);
  });

  it('should return filtered array when term is passed', () => {
    expect(pipe.transform(['1', '2', '3'], '2')).toEqual(['2']);
  });
});
