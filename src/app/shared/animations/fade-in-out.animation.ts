import { animate, style, transition } from '@angular/animations';
import { Style } from './';

export const fadeInOutAnimation = (
  ms: number = 200,
  enter: Style = { opacity: 1 },
  leave: Style = { opacity: 0 },
) => {
  return [
    transition(':leave', [
      style(enter),
      animate(ms, style(leave)),
    ]),
    transition(':enter', [
      style(leave),
      animate(ms, style(enter)),
    ]),
  ];
};
