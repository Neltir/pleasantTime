import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnChanges {
  title: string = "Pleasant Time";
  isLoggedIn: boolean = false;

  constructor(private userService: UserService, private router:Router) {}

  ngOnInit(){
    this.isLoggedIn = this.userService.checkIsLoggedIn();
  }

  ngOnChanges(){
    this.isLoggedIn = this.userService.checkIsLoggedIn();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/connexion']);
  }
}
