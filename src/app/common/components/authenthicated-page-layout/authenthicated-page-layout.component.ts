import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'AuthenticatedPageLayout',
  templateUrl: './authenthicated-page-layout.component.html',
  styleUrls: ['./authenthicated-page-layout.component.css']
})
export class AuthenthicatedPageLayoutComponent implements OnInit {

  logout():void{
    this.authService.logout();
  }

  constructor(private authService:AuthService) { }
  

  ngOnInit(): void {
  }

}
