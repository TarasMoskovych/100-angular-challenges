import { FilterTermPipe } from './filter-term.pipe';

describe('FilterTermPipe', () => {
  let pipe: FilterTermPipe;

  beforeEach(() => {
    pipe = new FilterTermPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
