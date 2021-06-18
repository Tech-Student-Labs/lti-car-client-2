import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private userService : UserService) {}

  public user: User;

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(data => {
      // console.log(data);
      this.user = data;
      console.log(this.user)
    })
  }

}
