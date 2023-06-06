import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
providedIn: 'root'
})

export class AuthguardGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        const routeurl: string = state.url;
        return this.isLogin(routeurl);
    }

    isLogin(routeurl: string) {
        if (this.userService.checkIsLoggedIn()) {
            return true;
        } else {
            this.userService.redirectUrl = routeurl;
            this.router.navigate(['/connexion'], {queryParams: { returnUrl: routeurl }} );
            return false;
        }
    }
}