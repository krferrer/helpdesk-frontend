import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/common/interfaces/Role';
import { SelectOption } from 'src/app/common/interfaces/SelectOption';
import { Ticket } from 'src/app/common/interfaces/Ticket';
import { UpdateEmployee } from 'src/app/common/interfaces/UpdateEmployee';
import { AuthService } from 'src/app/common/services/auth/auth.service';
import { DepartmentService } from 'src/app/common/services/department/department.service';
import { RoleService } from 'src/app/common/services/role/role.service';
import { TicketService } from 'src/app/Ticket/service/ticket.service';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employee?:UpdateEmployee | undefined;
  roles?:Role[];
  isEdit:boolean=false;
  departments?:string[];
  employeeId:number = Number(this.route.snapshot.paramMap.get("id"));
  ticketOptions:SelectOption[]=[{value:null,label:"None"}];
  watchTicketOptions:SelectOption[]=[];
  allWatchTickets:Ticket[]=[];

  setIsEdit(){
    this.isEdit=!this.isEdit;
  }

  handleWatchTicketChange(selectObject:HTMLSelectElement){
    const {value:selectValue} = selectObject;
    const foundTicket = this.allWatchTickets.find((ticket:Ticket)=>{
      return ticket.ticketNumber === parseInt(selectValue);
    });
    if(foundTicket){
      this.employee?.watchTickets.push(foundTicket);
    }
    this.watchTicketOptions = this.watchTicketOptions.filter((ticket:SelectOption )=>{
      return ticket.value !== parseInt(selectValue) ;
    });
  }

  handleWatchTicketRemove(ticketNumber:number|null){
    if(ticketNumber){
      const foundTicket = this.allWatchTickets.find((ticket:Ticket)=>{
          return ticket.ticketNumber === ticketNumber;
      });
      if(foundTicket){
        this.watchTicketOptions.push({value:foundTicket.ticketNumber,label:foundTicket.title});
        if(this.employee?.watchTickets){
          this.employee.watchTickets =this.employee?.watchTickets.filter((ticket:Ticket)=>{
            return ticketNumber !== ticket.ticketNumber;
          });
        }
      }
    }
  }

  getEmployee(){
    this.employeeService.getEmployee(this.employeeId).subscribe(response=>{
      this.employee={...response.data,assignedTicket:response.data.assignedTicket? response.data.assignedTicket : {ticketNumber:null}};
      if(response.data.assignedTicket){
        this.ticketOptions.push({label:response.data.assignedTicket.title,value:response.data.assignedTicket.ticketNumber})
      }
    });
    this.getAlltickets();
  }

  updateEmployee(){
    const watchTicketIds = this.employee?.watchTickets.map((ticket:Ticket)=>ticket.ticketNumber);
    this.employeeService.updateEmployee(this.employee);
    this.assignTicket(this.employee!.id,this.employee!.assignedTicket.ticketNumber);
    this.employeeService.assignTicketToWatch(this.employee?.id,watchTicketIds);
  }

  deleteEmployee(){
    this.employeeService.deleteEmployee(this.employeeId);
  }


  getRoles(){
    this.roleService.getRoles().subscribe(response=>this.roles=response.data.map((role:Role)=>({value:role.id,label:role.name})))
  }

  getDepartments(){
    this.departmentService.getDepartments().subscribe(response=>this.departments=response.data.map((department:string)=>({value:department,label:department})));
  }


  getAlltickets(){
    this.ticketService.getTickets().subscribe(response=>{
      this.allWatchTickets = response.data;
      this.watchTicketOptions = response.data.filter((ticket:Ticket)=>this.employee?.watchTickets.every((watchTicket:Ticket)=>watchTicket.ticketNumber !== ticket.ticketNumber))
                                     .map((ticket:Ticket)=>({label:ticket.title,value:ticket.ticketNumber}));
      // this.watchTicketOptions?.unshift({label:"None",value:null})
    })
  }

  getTicketsWithNoAssignee(){
    this.ticketService.getTicketsWithNoAssignee().subscribe(response=>{
      response.data.forEach((element:Ticket)=>{
        console.log({label:element.title,value:element.ticketNumber})
        this.ticketOptions.push({label:element.title,value:element.ticketNumber})
      });
      console.log(this.ticketOptions)
    })
  }

  assignTicket(employeeId:number,ticketId:number|null|string){
    this.employeeService.assignTicket(employeeId,ticketId === 'null'?null:ticketId);
  }
  

  shouldAllow(role:string):boolean{
    return this.authService.shouldAllow(role);
  }

  constructor(private route:ActivatedRoute,private employeeService:EmployeeService, private roleService:RoleService,private departmentService:DepartmentService
    ,private authService:AuthService,private ticketService:TicketService) { }

  ngOnInit(): void {
    this.getEmployee();
    this.getRoles();
    this.getDepartments();
    this.getTicketsWithNoAssignee();
  }

}
