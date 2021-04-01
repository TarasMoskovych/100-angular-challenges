import { LocalStorageService, State } from './local-storage.service';

describe('LocalStorageService', () => {
  const expectedData = { name: 'Angular', value: 11 };
  const localStorageSpy = {
    getItem: jest.fn(),
    setItem: jest.fn(),
  } as any;
  let service: LocalStorageService;

  beforeEach(() => {
    service = new LocalStorageService(localStorageSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('init', () => {
    it('should call "getItem"', () => {
      // tslint:disable-next-line
      expect(localStorageSpy.getItem).toHaveBeenCalledWith(service['stateKey']);
    });

    it('should return empty object', (done) => {
      service.state$.subscribe((data: State) => {
        expect(data).toEqual({});
        done();
      });
    });

    it('should return custom data', (done) => {
      const lsService = new LocalStorageService({ ...localStorageSpy, getItem: jest.fn().mockReturnValue(JSON.stringify(expectedData)) });

      lsService.state$.subscribe((data: State) => {
        expect(data).toEqual(expectedData);
        done();
      });
    });
  });

  describe('set data', () => {
    beforeEach(() => {
      service.update('ng', expectedData);
    });

    it('should call "setItem"', () => {
      // tslint:disable-next-line
      expect(localStorageSpy.setItem).toHaveBeenCalledWith(service['stateKey'], JSON.stringify({ ng: expectedData }));
    });

    it('should update state', (done) => {
      service.state$.subscribe((data: State) => {
        expect(data).toEqual({ ng: expectedData });
        done();
      });
    });
  });

  describe('merge data', () => {
    const lsService = new LocalStorageService({ ...localStorageSpy, getItem: jest.fn().mockReturnValue(JSON.stringify({ Angular: 11 })) });

    beforeAll(() => {
      lsService.update('Angular', 12);
      lsService.update('test', [1, 2, 3]);
    });

    it('should update state', (done) => {
      lsService.state$.subscribe((data: State) => {
        expect(data).toEqual({ Angular: 12, test: [1, 2, 3] });
        done();
      });
    });
  });
});
