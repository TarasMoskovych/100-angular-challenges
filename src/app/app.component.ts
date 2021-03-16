import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toolbarOpened = false;
  links: string[] = ['components', 'directives', 'services', 'pipes', 'other'];

  onToggle(opened: boolean): void {
    this.toolbarOpened = opened;
  }
}
