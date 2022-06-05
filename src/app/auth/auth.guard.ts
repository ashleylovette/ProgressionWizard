import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  router: any;

  constructor( private authService: AuthService ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean  | Promise<boolean> | Observable<boolean> {
     return this.authService.user.pipe(take(1),
     map(user => {
       const userData = JSON.parse(localStorage.getItem("userData"));
       if (userData || user) {
         this.authService.autoLogin();
         return true;
       } else {
         return this.router.createUrlTree(["auth"]);
       }
     }));
  }
}
