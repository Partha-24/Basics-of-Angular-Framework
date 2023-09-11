import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';
import { UserLogService } from '../user-log.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})

export class AddUserFormComponent {

  // user: User = new User(); // Initialize an empty user
  // users: User[] = []; // Array to store users
  
  // showAddUserForm() {
  //   console.log("clicked");
  // }

  // onSubmit() {
  //   // Add the user to the array
  //   this.users.push({ ...this.user });
  //   // Clear the form for the next user
  //   this.user = new User();
  //   console.log(this.users)
  // }
  

  user: User = new User();

  @Output() userAdded = new EventEmitter<User>();
  // constructor(private userLogService: UserLogService) {}
  constructor(private userDataService: UserDataService) {}

  onSubmit() {
    // Emit an event with the user data
    this.userAdded.emit(this.user);
    // Clear the form for the next user
    // this.user = new User();
    // Log user details using the UserLogService
    // this.userLogService.LogMyDetail(this.user);
    // Clear the form for the next user
    // this.user = new User();

    this.userDataService.addUser(this.user).subscribe(
      (newUser) => {
        console.log('User added successfully:', newUser);
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );

    // Clear the form for the next user
    this.user = new User();
  }


}
