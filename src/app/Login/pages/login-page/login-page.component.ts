import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username:string="";
  password:string="";

  handleLogin(username:string,password:string):void{
    this.authService.login(username,password);
  }

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

}
