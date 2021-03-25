import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

export interface SocialMedia {
  color: string;
  icon: string;
  href: string;
}

@Component({
  selector: 'app-social-media-bar',
  templateUrl: './social-media-bar.component.html',
  styleUrls: ['./social-media-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialMediaBarComponent {
  @Input() socials: SocialMedia[] = [];
}
