import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken(): string {
    return localStorage.getItem('token');
  }

  isLoggedIn() : boolean {
    return localStorage.getItem('token') != null;
  }

  setToken(token: string): void {
    localStorage.removeItem('token');
    localStorage.setItem('token', token);
  }
}
