import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';
import { UserLogService } from '../user-log.service';
import { UserDataService } from '../user-data.service';
import { Hero } from '../user-list/hero';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})

export class AddUserFormComponent {

  showError = false;
  errorField = '';
  errorMessage = '';
  hint = '';

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

    this.validateUserInput(this.user);

    this.userDataService.addUser(this.user).subscribe(
      (newUser) => {
        console.log('User added successfully:', newUser);
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );

    this.user = new User();
  }

  validateUserInput(user: Hero) {
    if (!user.First_Name || !user.Last_Name || !user.Email) {
      this.showError = true;
      this.errorField = 'Fields cannot be empty';
      this.errorMessage = 'Please fill in all required fields.';
      this.hint = 'Hint: Make sure all fields are filled.';
    }
  }

  hideError() {
    this.showError = false;
  }
}
