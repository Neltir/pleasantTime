import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * as jwt from 'jsonwebtoken';
import { map } from 'rxjs';
import { UserConnection } from './userConnection';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  redirectUrl: string = "";
  private baseUrl = 'http://localhost/pleasantTimeAPI';
  
  isLoggedIn: boolean = false;
  // @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor( private http: HttpClient) { }

  register(username: string, email:string, password: string, passwordRe: string){
    return this.http.post(`${this.baseUrl}/register`,{username, email, password, passwordRe})
    .pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  login(username: string, password: string){
    return this.http.post(`${this.baseUrl}/login`,{username, password})
      .pipe(
        map((data: any) => {
          console.log(data);
          if(data.token != null){
            this.setToken(data.token);
            sessionStorage['token'] = data.token;
            this.isLoggedIn = true;
            return data.token;
          } else {
            return data;
          }
          
        })
      )
  }
  
  logout(){
    this.deleteToken();
    this.isLoggedIn = false;
  }

  //token
  setToken(token: string): void {
    sessionStorage.setItem('token',token);
  }

  getToken() {
     return sessionStorage.getItem('token');
  }

  deleteToken() {
    sessionStorage.removeItem('token');
  }

  checkIsLoggedIn() {
    const userToken = this.getToken();
    if(userToken != null){
      return true;
    }
    return false;
  }

  // decodeToken(token:string):any {
  //   try{
  //     const decodedToken = jwt.decode(token);
  //     return decodedToken;
  //   } catch (error) {
  //     console.log('Erreur lors du décodage:',error);
  //     return null;
  //   }
  // }

}
