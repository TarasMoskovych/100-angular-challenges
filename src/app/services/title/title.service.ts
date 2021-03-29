import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private defaultTitle = 'AngularChallenges';

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  init(): void {
    this.router.events
      .pipe(
        filter((e: any) => e instanceof NavigationEnd)
      )
      .subscribe(() => this.setTitle());
  }

  private setTitle(): void {
    const title = this.defaultTitle + this.getTitle();

    if (title !== this.title.getTitle()) {
      this.title.setTitle(title);
    }
  }

  private getTitle(): string {
    const title: string = this.route.root.firstChild?.snapshot.data.title;

    if (title) {
      return ` - ${title}`;
    }

    return '';
  }
}
