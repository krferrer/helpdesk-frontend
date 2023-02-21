import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/common/interfaces/Ticket';
import { AuthService } from 'src/app/common/services/auth/auth.service';
import { TicketService } from '../../service/ticket.service';

@Component({
  selector: 'TicketManagement',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.css']
})
export class TicketManagementComponent implements OnInit {

  tickets?:Ticket[];

  getTickets(){
    this.ticketService.getTickets().subscribe(response=>{
      this.tickets=response.data;
    })
  }

  shouldAllow(role:string):boolean{
    return this.authService.shouldAllow(role);
  }


  constructor(private ticketService:TicketService,private authService:AuthService) { }

  ngOnInit(): void {
    this.getTickets();
  }

}
