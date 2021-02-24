import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LoaderType } from '../shared';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsComponent {
  loader = false;
  loaderType = LoaderType.Circular;
  value = 0;

  onUpdate() {
    this.value = Math.ceil(Math.random() * 100);
  }

  onChangeLoader() {
    this.loaderType = LoaderType[this.loaderType === LoaderType.Circular ? 'Loading' : 'Circular'];
  }
}
