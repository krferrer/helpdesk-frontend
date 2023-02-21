import { Component, OnInit } from '@angular/core';
import { NewTicket } from 'src/app/common/interfaces/NewTicket';
import { Ticket } from 'src/app/common/interfaces/Ticket';
import { ServerityService } from 'src/app/common/services/severity/serverity.service';
import { StatusService } from 'src/app/common/services/status/status.service';
import { TicketService } from '../../service/ticket.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  severities?:string[];
  statuses?:string[];
  ticket:NewTicket={
    title:"",
    description:"",
    severity:"",
    status:""
  }

  getSeverities(){
    this.severityService.getSeverities().subscribe(response=>{
      this.severities=response.data.map((option:string)=>({value:option,label:option}))
    })
  }

  getStatuses(){
    this.statusService.getStatuses().subscribe(response=>{
      this.statuses=response.data.map((option:string)=>({value:option,label:option}));
    })
  }

  createTicket(){
    this.ticketService.createTicket(this.ticket);
  }

  constructor(private severityService:ServerityService, private statusService:StatusService, private ticketService:TicketService) { }

  ngOnInit(): void {
    this.getSeverities();
    this.getStatuses();
  }

}
