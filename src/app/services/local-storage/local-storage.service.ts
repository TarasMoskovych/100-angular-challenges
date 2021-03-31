import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface State {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly stateKey = 'state';
  private readonly state = new BehaviorSubject<State>({});
  private data: State;

  readonly state$ = this.state.asObservable();

  constructor(@Inject('LocalStorage') private localStorage: Storage) {
    this.init();
  }

  update(key: string, value: any): void {
    this.data = { ...this.data, [key]: value };
    this.localStorage.setItem(this.stateKey, JSON.stringify(this.data));
    this.state.next(this.data);
  }

  private init(): void {
    this.data = JSON.parse(this.localStorage.getItem(this.stateKey) || '{}');
    this.state.next(this.data);
  }
}
