import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css','../dashboard.component.css']
})
export class ProfileComponent implements OnInit {
  username:string = '';

  constructor (private userService: UserService){}

  ngOnInit(){
    let userToken = this.userService.getToken();
    this.username = userToken.payload.data.username;
  }
  
}
