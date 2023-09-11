import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Hero } from './hero';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  users: User[] = [];

  constructor(public userDataService: UserDataService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userDataService.getUsers().subscribe(
      (users) => {
        this.users = users;
        // console.log("type : "+ typeof this.heroes + typeof this.users)
        // console.log("heroes : "+ this.heroes)
        // console.log("users : "+ users );
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

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
    this.users.push(newUser);
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

  showUserDetails(user: Hero) {
    this.selectedUser = user;
  }
}
