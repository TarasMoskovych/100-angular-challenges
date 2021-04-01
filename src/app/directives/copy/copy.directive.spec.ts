import { CopyDirective } from './copy.directive';

describe('CopyDirective', () => {
  const snackbarServiceSpy = { show: jest.fn() } as any;
  const text = 'Text to copy';
  let directive: CopyDirective;

  beforeAll(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: () => {},
      },
    });

    directive = new CopyDirective(snackbarServiceSpy);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should copy text', async () => {
    jest.spyOn(navigator.clipboard, 'writeText').mockResolvedValue();

    directive.text = text;
    await directive.onClick();

    expect(snackbarServiceSpy.show).toHaveBeenCalledWith(`Copied: "${text}"`);
    expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1);
  });
});
