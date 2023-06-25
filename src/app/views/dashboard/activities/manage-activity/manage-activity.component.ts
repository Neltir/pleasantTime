import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityTemp } from 'src/app/models/activityTemp';
import { ActivityService } from 'src/app/services/activity.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manage-activity',
  templateUrl: './manage-activity.component.html',
  styleUrls: ['./manage-activity.component.css']
})
export class ManageActivityComponent {

  isAdmin: boolean = false;
  activities: ActivityTemp[] = [];
  activitiesCount: number = 0;

  constructor(private router:Router,private userService:UserService, private activityService:ActivityService){}

  ngOnInit(){
    //controle si admin
    this.isAdmin= this.userService.checkIsAdmin();
    if(!this.isAdmin){
      alert("vous n'êtes pas autorisé sur cette page");
      this.userService.logout();
      this.router.navigate(['/connexion']);
    }

    // on rappatrie les activités
    this.getActivityTemp();
  }

  getActivityTemp(){
    if(this.isAdmin){
        this.activityService.getActivityTemp().subscribe(
        (data: any) => {
          this.activities = data.payload;
          this.activitiesCount = data.payload.length;
        }
      )
    }
    else {
      alert("Vous n'êtes pas Admin.");
      this.userService.logout();
      this.router.navigate(['/connexion']);
    }
  }

  deleteActivity(activityID: number){
    console.log(activityID);
  }
  validateActivity(activityID: number){
    console.log(activityID);
  }
}
