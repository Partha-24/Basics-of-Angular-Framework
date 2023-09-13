import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any; // Store the user object

  setUser(user: any) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }
}
