import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NewTicket } from 'src/app/common/interfaces/NewTicket';
import { Ticket } from 'src/app/common/interfaces/Ticket';
import { GenericResponse } from 'src/app/common/response/GenericResponse';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  getTickets():Observable<GenericResponse>{
    return this.http.get<GenericResponse>("http://localhost:8080/api/ticket",{withCredentials:true});
  }

  getTicket(ticketNumber:number):Observable<GenericResponse>{
    return this.http.get<GenericResponse>(`http://localhost:8080/api/ticket/${ticketNumber}`,{withCredentials:true})
  }

  createTicket(ticket:NewTicket):void{
    this.http.post("http://localhost:8080/api/ticket",ticket,{withCredentials:true}).subscribe(response=>{
      this.router.navigate(["/ticket"]);
    });
  }

  updateTicket(ticket?:Ticket):void{
    this.http.put<GenericResponse>("http://localhost:8080/api/ticket",ticket,{withCredentials:true}).subscribe(response=>{
      this.router.navigate(["/ticket"])
    });
  }

  getAssignedTicket(employeeNumber:number):Observable<GenericResponse>{
    return this.http.get<GenericResponse>(`http://localhost:8080/api/ticket/assigned-ticket/${employeeNumber}`,{withCredentials:true});
  }

  getTicketsWithNoAssignee():Observable<GenericResponse>{
    return this.http.get<GenericResponse>("http://localhost:8080/api/ticket/no-assignee-tickets",{withCredentials:true});
  }

  deleteTicket(ticketNumber:number):void{
    this.http.delete(`http://localhost:8080/api/ticket/${ticketNumber}`,{withCredentials:true}).subscribe(response=>{
      this.router.navigate(["/ticket"])
    });
  }

  constructor(private router:Router,private http:HttpClient) { }
}
