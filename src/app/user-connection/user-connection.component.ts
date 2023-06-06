import { Component } from '@angular/core';
import { UserConnection } from '../userConnection';
import { UserService } from '../user.service';
import { first } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-connection',
  templateUrl: './user-connection.component.html',
  styleUrls: ['../layout/layout.component.css', './user-connection.css']
})

export class UserConnectionComponent {
  
  user: UserConnection = {username:'',password:''};
  submitted: boolean = false;

  constructor(private userService: UserService, private router:Router){}

  userLogin(){
    this.submitted = true;
    this.userService.login(this.user.username,this.user.password)
      .pipe(first())
      .subscribe( data => {
        const redirect = this.userService.redirectUrl ? this.userService.redirectUrl : '/dashboard';
        this.router.navigate([redirect]);
      }, error => {
        console.log(error);
      });
  }
}
