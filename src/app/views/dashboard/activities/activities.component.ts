import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SubmitActivityComponent } from './submit-activity/submit-activity.component';
import { BrowseActivityComponent } from './browse-activity/browse-activity.component';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css','../dashboard.component.css']
})
export class ActivitiesComponent implements OnInit{
  param: any = null;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.param = params.get('choice');
    });
  }
}
