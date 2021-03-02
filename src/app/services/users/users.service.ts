import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  get(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url)
      .pipe(
        map((users: User[]) => users.map((user: User) => {
          const { name, email, phone, website } = user;
          return { name, email, phone, website } as User;
        })),
      );
  }
}
