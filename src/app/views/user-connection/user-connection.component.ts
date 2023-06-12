import { Component } from '@angular/core';
import { UserConnection } from '../../models/userConnection';
import { UserService } from '../../services/user.service';
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
    return this.userService.login(this.user.username,this.user.password).subscribe( 
      (data) => {
        this.router.navigate(['/dashboard']);
      }, 
      (error) => {
        console.log(error);
        alert(error.text.message);
      }
    );
  }
}
