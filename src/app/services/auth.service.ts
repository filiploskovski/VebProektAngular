import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken(): string {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.removeItem('token');
    localStorage.setItem('token', token);
  }

  addItemToLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  deleteItemFromLocalStorage(key: string) {
    localStorage.removeItem(key);
  }
}
