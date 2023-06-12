import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  title: string = "Pleasant Time";
  isLoggedIn: boolean = false;

  constructor(private userService: UserService, private router:Router) {}

  ngOnInit(){
    this.userService.isLoggedIn.subscribe(
      (isLoggedIn: boolean) => {
        this.isLoggedIn = isLoggedIn;
      }
    )
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/connexion']);
  }
}
