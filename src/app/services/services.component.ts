import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

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
  selectedUser$: Observable<User>;
  user$: Observable<User>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.state$ = this.localStorageService.state$;
    this.user$ = this.usersService.getOne();
    this.selectedUser$ = this.getUser();
  }

  onUpdateState(): void {
    this.localStorageService.update('test', [1, 2, 3]);
  }

  private getUser(): Observable<User> {
    return this.activatedRoute.params
      .pipe(
        map((params: Params) => params.id),
        mergeMap((id: string) => this.usersService.getById(id || '1')),
      );
  }
}
