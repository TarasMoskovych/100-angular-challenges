import { Component } from '@angular/core';

import { AccordionItem } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value = 0;
  items: AccordionItem[] = [
    {
      title: 'Title 1',
      content: 'Content 1',
      opened: true,
    },
    {
      title: 'Title 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cum repellendus nobis doloremque quod unde at fuga expedita adipisci eaque soluta cumque deserunt modi architecto a, voluptas earum? Quam, ex?',
    },
  ];

  onUpdate() {
    this.value = Math.ceil(Math.random() * 100);
  }
}
