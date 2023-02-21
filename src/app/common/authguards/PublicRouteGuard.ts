import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth/auth.service";

@Injectable({providedIn:"root"})
export class PublicRouteGuard implements CanActivate{

    constructor(private authService:AuthService,private router:Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const user = this.authService.user;
        if(!user){
            return true;
        }
        this.router.navigate(['/employee']);
        return false;
    }
}