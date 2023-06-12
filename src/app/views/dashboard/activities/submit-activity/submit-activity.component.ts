import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivityService } from 'src/app/services/activity.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-submit-activity',
  templateUrl: './submit-activity.component.html',
  styleUrls: ['./submit-activity.component.css']
})
export class SubmitActivityComponent {
  user: User = {"userID":0,"username":"","isAdmin":false};
  activityTemp: any = { "title":"","description":""};
  constructor(private activityService: ActivityService, private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    console.log(this.user);
  }

  submitActivity():void {
    this.activityService.submitActivity(this.activityTemp.title,this.activityTemp.description,this.user.userID);
  }
}
