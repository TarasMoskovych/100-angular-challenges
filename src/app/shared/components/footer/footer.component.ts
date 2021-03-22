import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  date = new Date();
  socials = [
    {
      href: 'https://github.com/TarasMoskovych',
      icon: 'fab fa-github',
    },
    {
      href: 'https://www.linkedin.com/in/taras-moskovych-937803144',
      icon: 'fab fa-linkedin-in',
    },
    {
      href: 'https://www.facebook.com/profile.php?id=100005659237647',
      icon: 'fab fa-facebook',
    },
  ];
}
