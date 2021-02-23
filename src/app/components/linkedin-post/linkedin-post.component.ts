import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-linkedin-post',
  templateUrl: './linkedin-post.component.html',
  styleUrls: ['./linkedin-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkedinPostComponent {
  @Input() url = 'https://github.com/TarasMoskovych/100-angular-challenges';

  get href(): string {
    return `https://www.linkedin.com/sharing/share-offsite/?url=${this.url}`;
  }
}
