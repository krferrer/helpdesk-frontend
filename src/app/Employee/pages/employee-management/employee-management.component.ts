import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/interfaces/Employee';
import { AuthService } from 'src/app/common/services/auth/auth.service';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'EmployeeManagement',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {

  employees?:Employee[];

  getEmployees(){
    this.employeeService.getEmployees().subscribe(response=>this.employees=response.data);
  }

  shouldAllow(role:string):boolean{
    return this.authService.shouldAllow(role);
  }
  constructor(private employeeService:EmployeeService, private authService:AuthService) { }

  ngOnInit(): void {
    this.shouldAllow("ROLE_ADMIN");
    this.getEmployees();
  }

}
