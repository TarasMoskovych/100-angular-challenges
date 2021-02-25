import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { LoaderType } from './loader-type.model';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {
  @Input() shown = false;
  @Input() type: LoaderType = LoaderType.Circular;

  loaderTypes = LoaderType;
  text = 'Loading';
}
