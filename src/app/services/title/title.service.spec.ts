import { NavigationEnd } from '@angular/router';
import { of } from 'rxjs';
import { TitleService } from './title.service';

describe('TitleService', () => {
  let titleSpy: any;
  const routerMock = { events: of(new NavigationEnd(1, 'http://localhost:4200', 'http://localhost:4200')) } as any;

  beforeEach(() => {
    titleSpy = { setTitle: jest.fn(), getTitle: jest.fn() };
  });

  it('should be created', () => {
    expect(new TitleService(titleSpy as any, routerMock, {} as any)).toBeTruthy();
  });

  it('should set default title', () => {
    new TitleService(titleSpy as any, routerMock, { root: {} } as any).init();

    expect(titleSpy.setTitle).toHaveBeenCalledWith('AngularChallenges');
  });

  describe('custom title', () => {
    let routeSpy: any;

    beforeAll(() => {
      routeSpy = {
        root: {
          firstChild: {
            snapshot: {
              data: {
                title: 'Custom',
              },
            },
          },
        },
      }
    });

    it('should set custom title when current title is different', () => {
      titleSpy.getTitle.mockReturnValueOnce('Test');
      new TitleService(titleSpy as any, routerMock, routeSpy).init();

      expect(titleSpy.setTitle).toHaveBeenCalledWith('AngularChallenges - Custom');
    });

    it('should not set custom title when current title is the same', () => {
      titleSpy.getTitle.mockReturnValueOnce('AngularChallenges - Custom');
      new TitleService(titleSpy as any, routerMock, routeSpy).init();

      expect(titleSpy.setTitle).not.toBeCalled();
    });
  });
});
