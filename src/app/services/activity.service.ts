import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivityTemp } from '../models/activityTemp';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private baseUrl = 'http://localhost/pleasantTimeAPI';

  constructor(private http: HttpClient) { }

  submitActivity(name: string, description: string, userID: number){
    return this.http.post(`${this.baseUrl}/submitActivity`,{name, description, userID});
  }

  getActivityTemp(){
    return this.http.get<ActivityTemp[]>(`${this.baseUrl}/getActivityTemp`);
  }
}
