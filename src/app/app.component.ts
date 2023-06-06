import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = "Pleasant Time";
  isLoggedIn: boolean;

  constructor(private userService: UserService) {
    this.isLoggedIn = false;
  }

  ngOnInit() {
    this.isLoggedIn = this.userService.checkIsLoggedIn();
  } 

  ngOnDestroy() {
  }

}
