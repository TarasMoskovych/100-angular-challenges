import { CopyDirective } from './copy.directive';

describe('CopyDirective', () => {
  const snackbarServiceSpy = jasmine.createSpyObj('Snackbar', ['show']);
  const text = 'Text to copy';
  let directive: CopyDirective;

  beforeAll(() => {
    directive = new CopyDirective(snackbarServiceSpy);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should copy text', async() => {
    spyOn(navigator.clipboard, 'writeText').and.resolveTo();

    directive.text = text;
    await directive.onClick();

    expect(snackbarServiceSpy.show).toHaveBeenCalledOnceWith(`Copied: "${text}"`);
    expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1);
  });
});
