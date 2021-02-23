import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwitterPostComponent {
  @Input() href = window.location.href;
  @Input() hashTags: string[] = ['JavaScript', 'TypeScript', 'Angular', '100_angular_challenges'];

  constructor(private titleService: Title) { }

  get twitterUrl(): string {
    const base = this.getBaseWithHashTagsAndRoute();
    const message = encodeURIComponent(`Check out ${this.titleService.getTitle()} and become a CODING GOD!!!`);

    return `${base}${message}`;
  }

  private getBaseWithHashTagsAndRoute(): string {
    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(this.hashTags.join(','))}&url=${this.href}&text=`;
  }
}
