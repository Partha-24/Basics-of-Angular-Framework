import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('api/users');
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>('api/users', user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`api/users/${id}`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`api/users/${id}`);
  }
}
