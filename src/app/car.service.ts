import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, map } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl = 'http://localhost/pleasantTimeAPI';

  constructor(private http: HttpClient) { }

  // retourne la liste des cars du observable
  getAll(): any {
    return this.http
      .get(`${this.baseUrl}/list`);
  }

  store(car: Car) {
    return this.http
      .post(`${this.baseUrl}/store`, { data: car }).pipe(
        map((res: any) => {
          return res['data'];
        })
      );
  }

}
