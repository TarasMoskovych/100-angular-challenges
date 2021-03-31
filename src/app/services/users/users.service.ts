import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

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
        map((users: User[]) => users.map((user: User) => this.mapUser(user))),
      );
  }

  getById(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/${id}`)
      .pipe(
        map((user: User) => this.mapUser(user)),
      );
  }

  getOne(): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/${Math.floor(Math.random() * 10) + 1}`)
      .pipe(
        map((user: User) => this.mapUser(user)),
        delay(1000),
      );
  }

  private mapUser(user: User): User {
    const { name, email, phone, website } = user;
    return { name, email, phone, website } as User;
  }
}
