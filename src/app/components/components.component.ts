import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';

import { LoaderType } from '../shared';
import { ModalComponent } from './modal/modal.component';
import { Quote, QuoteColors } from './';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsComponent {
  @ViewChild('exampleModal') modal: ModalComponent;

  checked = false;
  loader = false;
  loaderType = LoaderType.Circular;
  value = 0;
  quote: Quote = {
    text: 'Get Good. Get Great. Get Better.',
    author: 'Dylan C. Israel',
    occupation: 'Software Engineer, Mentor, Educator'
  };
  quoteColors: QuoteColors = { background: '#E4F4E8', text: '#628E6D' };

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
