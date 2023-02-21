import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/common/interfaces/Employee';
import { NewEmployee } from 'src/app/common/interfaces/NewEmployee';
import { Ticket } from 'src/app/common/interfaces/Ticket';
import { UpdateEmployee } from 'src/app/common/interfaces/UpdateEmployee';
import { GenericResponse } from 'src/app/common/response/GenericResponse';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees():Observable<GenericResponse>{
    return this.http.get<GenericResponse>("http://localhost:8080/api/employee/",{withCredentials:true});
  }
  
  getEmployee(id:number):Observable<GenericResponse>{
    return this.http.get<GenericResponse>(`http://localhost:8080/api/employee/${id}`,{withCredentials:true});
  }

  updateEmployee(employee?:UpdateEmployee):void{
    this.http.put("http://localhost:8080/api/employee",employee,{withCredentials:true}).subscribe(response=>{
      this.router.navigate(["/employee"]);
    });
  }

  createEmployee(employee:NewEmployee):void{
    this.http.post("http://localhost:8080/api/employee/",employee,{withCredentials:true}).subscribe(()=>{
      this.router.navigate(["/employee"]);
    });
  }

  deleteEmployee(id:number):void{
    this.http.delete(`http://localhost:8080/api/employee/${id}`,{withCredentials:true}).subscribe(()=>{
      this.router.navigate(["/employee"])
    });
  }

  assignTicket(employeeId:number,ticketId:number|null|string):void{
    this.http.put("http://localhost:8080/api/employee/assign-ticket",{employeeId,ticketId},{withCredentials:true}).subscribe(response=>{});
  }

  assignTicketToWatch(employeeId:number|undefined,ticketNumbers:any):void{
    this.http.put("http://localhost:8080/api/ticket/assign-watchers",{employeeId,ticketNumbers},{withCredentials:true}).subscribe(response=>{
    })
  }


  constructor(private http:HttpClient,private router:Router) { }
}
