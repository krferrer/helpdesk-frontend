import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuth } from '../../interfaces/UserAuth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user?:any;

  login(username:string,password:string):void{
    this.http.post<any>("http://localhost:8080/api/login",{username,password},{
      withCredentials:true
    }).subscribe((response)=>{
      this.user=response.data;
      window.localStorage.setItem("user",JSON.stringify(this.user));
      this.router.navigate(['/employee']);
    });
  }

  logout():void{
    this.user=null;
    window.localStorage.clear();
    this.router.navigate(["/login"]);
  }

  shouldAllow(roles:string):boolean{
      return Object.values(this.user.user.role).some((role:any)=>roles.includes(role));

  }

  init(){
    const user = window.localStorage.getItem("user");
    if(user){
      this.user = JSON.parse(user);
    }
  }

  constructor(private http:HttpClient, private router:Router) {
    this.init();
   }
}
