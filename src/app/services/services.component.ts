import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './users/user.model';
import { LocalStorageService, State } from './local-storage/local-storage.service';
import { UsersService } from './users/users.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent implements OnInit {
  state$: Observable<State>;
  user$: Observable<User>;

  constructor(
    private localStorageService: LocalStorageService,
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.state$ = this.localStorageService.state$;
    this.user$ = this.usersService.getOne();
  }

  onUpdateState(): void {
    this.localStorageService.update('test', [1, 2, 3]);
  }
}
