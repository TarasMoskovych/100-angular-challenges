import { Component, ChangeDetectionStrategy, Input, ContentChildren, TemplateRef } from '@angular/core';

export interface Tab {
  title: string;
  active?: boolean;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent {
  @Input() tabs: Tab[] = [];
  @ContentChildren(TemplateRef) templates: TemplateRef<HTMLElement>[];

  onTabChange(tab: Tab): void {
    this.tabs.forEach((t: Tab) => t.active = t.title === tab.title);
  }

  get activeTabIdx(): number {
    return this.tabs.findIndex((tab: Tab) => tab.active) || 0;
  }
}
