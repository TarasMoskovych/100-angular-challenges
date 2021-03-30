import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipesComponent {
  data = [1, 2, [3, 4], [[5, 6]]];
  html = `<a href="https://angular.io/" target="_blank">Angular Documentation</a>`;
  courses: string[] = ['Twitter', 'YouTube', 'LinkedIn', 'Coursera'];
  frameworks = [
    {
      name: 'ExtJS',
      id: 1,
    },
    {
      name: 'React',
      id: 2,
    },
    {
      name: 'Angular',
      id: 0,
    },
    {
      name: 'VueJS',
      id: 3,
    },
    {
      name: 'Ember',
      id: 4,
    },
    {
      name: 'Svelte ',
      id: 5,
    },
  ];
}
