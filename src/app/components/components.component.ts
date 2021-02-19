import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AccordionItem } from './accordion/accordion-item.model';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsComponent {
  loader = false;
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
