import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: boolean;

  constructor() { 
    this.loggedIn = false;
  }

  async login(): Promise<boolean> {
    this.loggedIn = true;
    return this.loggedIn;
  }

  async logout(): Promise<boolean> {
    this.loggedIn = false;
    return this.loggedIn;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  isAdmin(): boolean {
    return true;
  }
}
