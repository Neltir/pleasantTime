import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  isAdmin: boolean = false;

  constructor(private router:Router,private userService:UserService){}

  ngOnInit(){
    this.isAdmin= this.userService.checkIsAdmin();
    if(!this.isAdmin){
      alert("vous n'êtes pas autorisé sur cette page");
      this.router.navigate(['/dashboard']);
    } 
  }
}
