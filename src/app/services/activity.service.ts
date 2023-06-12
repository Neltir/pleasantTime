import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private baseUrl = 'http://localhost/pleasantTimeAPI';

  constructor(private http: HttpClient) { }

  submitActivity(name: string, description: string, userID: number){
    return this.http.post(`${this.baseUrl}/submitActivity`,{name, description, userID});
  }
}
