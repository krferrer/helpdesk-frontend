import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/common/interfaces/Ticket';
import { AuthService } from 'src/app/common/services/auth/auth.service';
import { ServerityService } from 'src/app/common/services/severity/serverity.service';
import { StatusService } from 'src/app/common/services/status/status.service';
import { TicketService } from '../../service/ticket.service';
@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {

  ticket?:Ticket;
  ticketNumber:number=Number(this.route.snapshot.paramMap.get("id"));
  statuses?:string[];
  severities?:string[];
  isEdit:boolean=false;

  setIsEdit(){
    this.isEdit=!this.isEdit;
  }
  
  getTicket():void{
    this.ticketService.getTicket(this.ticketNumber).subscribe(response=>{
      this.ticket=response.data;
    })
  }

  updateTicket():void{
    this.ticketService.updateTicket(this.ticket);
  }

  getSeverities():void{
    this.severityService.getSeverities().subscribe(response=>{
      this.severities=response.data.map((severity:string)=>({value:severity,label:severity}))
    })
  }

  getStatuses():void{
    this.statusService.getStatuses().subscribe(response=>{
      this.statuses=response.data.map((status:string)=>({value:status,label:status}))
    })

  }

  shouldAllow(role:string):boolean{
    return this.authService.shouldAllow(role);
  }

  deleteTicket(){
    this.ticketService.deleteTicket(this.ticketNumber);
  }
  
  

  constructor(private ticketService:TicketService,private route:ActivatedRoute, private statusService:StatusService,private severityService:ServerityService, private authService:AuthService) { }

  ngOnInit(): void {
    this.getTicket();
    this.getSeverities();
    this.getStatuses();
  }

}
