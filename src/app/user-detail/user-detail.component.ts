import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  user: any;
  
  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
    console.log("user detail got : "+JSON.stringify(this.user))
  }
}