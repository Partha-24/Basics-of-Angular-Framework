import { Component } from '@angular/core';
import { User } from '../user.model';
import { Hero } from './hero';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  //created class and constructor to set the values
  heroes = [
    new Hero('Doe', 'John', 'john@example.com', true),
    new Hero('Paul', 'Alin', 'alin@example.com', true),
    new Hero('Ayattan', 'Sudip', 'sudip@example.com', true),
    new Hero('Nama', 'Vishal', 'vishal@example.com', true),
    new Hero('Joshi', 'Shivang', 'shivang@example.com', true),
    new Hero('Joshi', 'Shivang', 'shivang@example.com', true),
    new Hero('Joshi', 'Shivang', 'shivang@example.com', true),
    new Hero('Joshi', 'Shivang', 'shivang@example.com', true),
    new Hero('Joshi', 'Shivang', 'shivang@example.com', true),
    new Hero('Joshi', 'Shivang', 'shivang@example.com', true),
  ];
  
  addUser(newUser: User) {
    this.heroes.push(newUser);
  }
  //created model 
  // users: User[] = [
  //   { First_Name: 'John', Last_Name: 'Doe', Email: 'john@example.com', IsActive: true },
  //   { First_Name: 'Alin', Last_Name: 'Paul', Email: 'alin@example.com', IsActive: false },
  //   { First_Name: 'Sudip', Last_Name: 'Ayattan', Email: 'sudip@example.com', IsActive: true },
  //   { First_Name: 'Vishal', Last_Name: 'Nama', Email: 'vishal@example.com', IsActive: false },
  //   { First_Name: 'Shivang', Last_Name: 'Joshi', Email: 'shivang@example.com', IsActive: true },
  // ];
  // selectedUser: User | null = null;

  selectedUser: Hero | null = null;
  // selectedUser = this.heroes[1];

  showUserDetails(user: Hero) {
    this.selectedUser = user;
  }
}
