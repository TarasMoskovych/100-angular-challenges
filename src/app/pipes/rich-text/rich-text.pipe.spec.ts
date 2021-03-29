import { RichTextPipe } from './rich-text.pipe';

describe('RichTextPipe', () => {
  const pipe = new RichTextPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string', () => {
    expect(pipe.transform('<span>')).toBe('');
  });

  it('should return valid html', () => {
    const html = '<span>test</span>';
    expect(pipe.transform(html)).toBe(html);
  });
});
