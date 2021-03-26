import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  countdown = 5;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.onRedirect();
  }

  private onRedirect(): void {
    const sub: Subscription = interval(1000)
      .pipe(
        tap(() => this.countdown--),
      ).subscribe(() => {
        if (this.countdown === 0) {
          sub.unsubscribe();
          this.router.navigateByUrl('/components');
        }
      });
  }
}
