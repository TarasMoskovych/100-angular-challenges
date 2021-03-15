import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './users/user.model';
import { UsersService } from './users/users.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent implements OnInit {
  user$: Observable<User>;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.user$ = this.usersService.getOne();
  }
}
