import { Component, ChangeDetectionStrategy, ViewChild, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';
import { Observable } from 'rxjs';

import { fadeInOutAnimation } from '../shared/animations';
import { LoaderType } from '../shared/components';
import {
  ButtonToggle,
  ModalComponent,
  Quote,
  QuoteColors,
  Tab,
  PillType,
  Pill,
  RibbonLocation,
  RibbonType,
  SocialMedia,
} from './';
import { SnackbarService, User, UsersService } from '../services';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [trigger('fade', fadeInOutAnimation())],
})
export class ComponentsComponent implements OnInit {
  @ViewChild('exampleModal') modal: ModalComponent;

  constructor(
    private snackbarService: SnackbarService,
    private usersService: UsersService,
  ) { }

  ngOnInit() {
    this.users$ = this.usersService.get();
  }

  users$: Observable<User[]>;
  search = 'Search';
  checked = false;
  value = 0;

  loader = false;
  loaderType = LoaderType.Circular;

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

  tabs: Tab[] = [
    {
      title: 'Tab 1',
    },
    {
      title: 'Tab 2',
      active: true,
    },
    {
      title: 'Tab 3',
    },
  ];

  ribbonEnabled = true;
  ribbonLocations: RibbonLocation[] = Object.values(RibbonLocation);
  ribbonLocation: RibbonLocation = RibbonLocation.BottomLeft;
  ribbonColors: RibbonType[] = Object.values(RibbonType);
  ribbonColor: RibbonType = RibbonType.Info;

  buttons: ButtonToggle[] = [
    {
      id: '1',
      text: 'Button 1',
    },
    {
      active: true,
      id: '2',
      text: 'Button 2',
    },
    {
      id: '3',
      text: 'Button 3',
    },
  ];

  counter = 1;

  socials: SocialMedia[] = [
    {
      color: '#3B5998',
      href: 'https://www.facebook.com',
      icon: 'fab fa-facebook-f',
    },
    {
      color: '#C13584',
      href: 'https://www.instagram.com',
      icon: 'fab fa-instagram',
    },
    {
      color: '#0E76A8',
      href: 'https://www.linkedin.com/',
      icon: 'fab fa-linkedin-in',
    },
    {
      color: '#1DA1F2',
      href: 'https://twitter.com',
      icon: 'fab fa-twitter',
    },
    {
      color: '#C4302B',
      href: 'https://www.youtube.com',
      icon: 'fab fa-youtube',
    },
  ];

  bottomSheetOpened = false;
  pills: Pill[] = [
    {
      label: 'Error',
      type: PillType.Error,
      icon: 'fas fa-exclamation',
    },
    {
      label: 'Info',
      type: PillType.Info,
      icon: 'fas fa-info',
    },
    {
      label: 'Success',
      type: PillType.Success,
      icon: 'fas fa-check-circle',
    },
    {
      label: 'Warning',
      type: PillType.Warning,
    },
  ];

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

  onShowSnackBar(autoclose: boolean): void {
    this.snackbarService.show(`Custom message - ${this.counter++}`, autoclose);
  }

  onCountDownFinish(): void {
    this.snackbarService.show('Happy New 2022 Year!', false);
  }

  onToggleBottomSheet(opened: boolean): void {
    this.bottomSheetOpened = opened;
  }
}
