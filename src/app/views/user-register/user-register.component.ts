import { Component } from '@angular/core';
import { UserRegister } from '../../models/userRegister';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['../layout/layout.component.css', './user-register.css']
})

export class UserRegisterComponent {
  
  user: UserRegister = {username:'',password:'',passwordRe:'',email:''};
  submitted: boolean = false;

  constructor(private userService: UserService, private router:Router){}

  userRegister(username: string, email: string, password: string, passwordRe: string){
    this.submitted = true;
    this.userService.register(username,email,password,passwordRe).subscribe( 
      (data) => {
        this.router.navigate(['login']);
      }, 
      (error) => {
        console.log(error);
      }
    );
  }
}
