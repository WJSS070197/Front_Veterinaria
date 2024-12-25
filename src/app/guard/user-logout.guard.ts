import { inject, Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../demo/service/auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn:'root'
})
class GuardService{
  constructor(
    private authService:AuthService,
    private router:Router
  ){ }

  CanActivate(
    next:ActivatedRouteSnapshot,state:RouterStateSnapshot
  ):boolean{

    if(!this.authService.isLogued()){
      return true;
    }
        this.router.navigate(["/"])
        return false;
  
  }
}

export const UserLogoutGuard:CanActivateFn=(
  next:ActivatedRouteSnapshot,
  state:RouterStateSnapshot
):boolean=>{
return inject(GuardService).CanActivate(next,state);
};


