import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';

import { LoaderType } from '../shared';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsComponent {
  @ViewChild('exampleModal') modal: ModalComponent;

  loader = false;
  loaderType = LoaderType.Circular;
  value = 0;

  onUpdate(): void {
    this.value = Math.ceil(Math.random() * 100);
  }

  onChangeLoader(): void {
    this.loaderType = LoaderType[this.loaderType === LoaderType.Circular ? 'Loading' : 'Circular'];
  }

  onToggleModal(toggler: boolean = false): void {
    this.modal[toggler ? 'openModal' : 'closeModal']();
  }

  onModalOpen(): void {
    console.log('opened');
  }
}
