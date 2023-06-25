import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * as jwt from 'jsonwebtoken';
import { UserConnection } from '../models/userConnection';
import { User } from '../models/user';
import { BehaviorSubject, Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  redirectUrl: string = "";
  private baseUrl = 'http://localhost/pleasantTimeAPI';

  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoggedIn: Observable<boolean> = this.isLoggedInSubject.asObservable();

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
          if(data.token != null){
            this.setToken(data.token);
            this.isLoggedInSubject.next(true);
            return data.token;
          } else {
            return data;
          }
        })
      )
  }
  
  logout(){
    this.deleteToken();
    this.isLoggedInSubject.next(false);
  }

  getUser(): User{
    var token = this.getToken();
    var user = token.payload.data;
    return user;
  }

  //token
  setToken(token: string): void {
    var jsonToken = JSON.stringify(token);
    sessionStorage.setItem('token',jsonToken);
  }

  getToken() {
    var jsonToken = sessionStorage.getItem('token');
    if(jsonToken) return JSON.parse(jsonToken);
    else console.error("Token is null.");
  }

  deleteToken() {
    sessionStorage.removeItem('token');
  }

  checkIsLoggedIn(): boolean {
    const userToken = this.getToken();
    if(userToken != null){
      this.isLoggedInSubject.next(true);
      return true;
    }
    this.isLoggedInSubject.next(false);
      return false;
  }

  checkIsAdmin(): boolean{
    var token = sessionStorage.getItem('token');
    var tokenParsed = token == null ? 0 : JSON.parse(token).payload.data.isAdmin;
    return tokenParsed == 1 ? true : false;
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
