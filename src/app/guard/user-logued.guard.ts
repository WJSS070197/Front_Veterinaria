import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../demo/service/auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn:'root'
})

export class UserLoguedGuard implements	 CanActivate{
  constructor(
    private authService:AuthService,
    private router:Router
  ){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean  {
    if(this.authService.isLogued()){
      return true;
    }
        this.router.navigate(["auth/login"])
        return false;
  }

}

