import { Component, ChangeDetectionStrategy, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LoaderType } from '../shared/components';
import { ModalComponent } from './modal/modal.component';
import { Quote, QuoteColors } from './';
import { User, UsersService } from '../services';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsComponent implements OnInit {
  @ViewChild('exampleModal') modal: ModalComponent;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users$ = this.usersService.get();
  }

  users$: Observable<User[]>;
  search = 'Search';
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
  richTextValue: string = `
    <div style="background: #E8ECF4; padding: 10px; color: #4060A0;">
      <h2>Heading</h2>
      <p style="margin-top: 10px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
    <img style="max-width: 100%;" alt src="https://cdn-images-1.medium.com/max/1024/1*-zkpV1IfOv-1dux6ZqWBCQ.png">
  `;

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

  onSearch(value: string): void {
    console.log(value);
    this.search = value;
  }
}
