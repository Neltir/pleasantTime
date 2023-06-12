import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = "Pleasant Time";
  // isLoggedIn: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(){
    // this.userService.isLoggedIn.subscribe(
    //   (isLoggedIn: boolean) => {
    //     this.isLoggedIn = isLoggedIn;
    //   }
    // )
  } 

  ngOnDestroy() {
  }

}
