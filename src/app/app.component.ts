import { Component, OnInit } from '@angular/core';

import { TitleService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  toolbarOpened = false;
  links: string[] = ['components', 'directives', 'services', 'pipes', 'other'];

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.init();
  }

  onToggle(opened: boolean): void {
    this.toolbarOpened = opened;
  }
}
