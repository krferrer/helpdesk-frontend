import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/common/interfaces/Employee';
import { NewEmployee } from 'src/app/common/interfaces/NewEmployee';
import { Role } from 'src/app/common/interfaces/Role';
import { DepartmentService } from 'src/app/common/services/department/department.service';
import { RoleService } from 'src/app/common/services/role/role.service';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'CreateEmployee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:NewEmployee={
    firstName:"",
    middleName:"",
    lastName:"",
    department:"IT",
    username:"",
    password:"",
    role:{
      id:2,
      name:"USER"
    }
  }
  departments?:string[];
  roles?:Role[];

  
  getRoles(){
    this.roleService.getRoles().subscribe(response=>this.roles=response.data.map((role:Role)=>({value:role.id,label:role.name})))
  }

  getDepartments(){
    this.departmentService.getDepartments().subscribe(response=>this.departments=response.data.map((department:string)=>({value:department,label:department})));
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee);
  }
  constructor(private route:ActivatedRoute,private employeeService:EmployeeService, private roleService:RoleService,private departmentService:DepartmentService) { }

  ngOnInit(): void {
    this.getRoles();
    this.getDepartments();
  }

}
