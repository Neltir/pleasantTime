import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SubmitActivityComponent } from './submit-activity/submit-activity.component';
import { BrowseActivityComponent } from './browse-activity/browse-activity.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css','../dashboard.component.css']
})
export class ActivitiesComponent implements OnInit{
  param: any = null;
  isAdmin: boolean = false;

  constructor(private route: ActivatedRoute, private userService:UserService){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.param = params.get('choice');
    });
    this.isAdmin = this.userService.checkIsAdmin();
  }
}
