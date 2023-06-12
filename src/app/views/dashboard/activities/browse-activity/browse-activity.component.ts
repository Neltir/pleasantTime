import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-browse-activity',
  templateUrl: './browse-activity.component.html',
  styleUrls: ['./browse-activity.component.css']
})
export class BrowseActivityComponent implements OnInit{
  
  constructor(private activityService: ActivityService){}

  ngOnInit(){

  }
}
