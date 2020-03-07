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
    console.log("Token od local storage", this.getToken());
  }

  addItemToLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  deleteItemFromLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }
}
