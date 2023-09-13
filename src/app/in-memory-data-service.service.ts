import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfoUtilities } from 'angular-in-memory-web-api';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  private lastId = 0;
  createDb() {
    const users: User[] = [
      { First_Name: 'John', Last_Name: 'Doe', Email: 'john@example.com', IsActive: true },
      { First_Name: 'Jane', Last_Name: 'Smith', Email: 'jane@example.com', IsActive: true },
      { First_Name: 'John', Last_Name: 'Doe', Email: 'john@example.com', IsActive: true },
      { First_Name: 'Alin', Last_Name: 'Paul', Email: 'alin@example.com', IsActive: false },
      { First_Name: 'Sudip', Last_Name: 'Ayattan', Email: 'sudip@example.com', IsActive: true },
      { First_Name: 'Vishal', Last_Name: 'Nama', Email: 'vishal@example.com', IsActive: false },
      { First_Name: 'Shivang', Last_Name: 'Joshi', Email: 'shivang@example.com', IsActive: true },
    ];
    return { users };
  }
  genId(users: User[]): number {
    this.lastId += 1;
    return this.lastId;
  }
}
