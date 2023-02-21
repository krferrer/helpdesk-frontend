import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/authguards/AuthGuard';
import { PublicRouteGuard } from './common/authguards/PublicRouteGuard';
import { RoleAuthGuard } from './common/authguards/RoleAuthGuard';
import { CreateEmployeeComponent } from './Employee/pages/create-employee/create-employee.component';
import { EmployeeManagementComponent } from './Employee/pages/employee-management/employee-management.component';
import { ViewEmployeeComponent } from './Employee/pages/view-employee/view-employee.component';
import { LoginPageComponent } from './Login/pages/login-page/login-page.component';
import { CreateTicketComponent } from './Ticket/pages/create-ticket/create-ticket.component';
import { TicketManagementComponent } from './Ticket/pages/ticket-management/ticket-management.component';
import { ViewTicketComponent } from './Ticket/pages/view-ticket/view-ticket.component';

const routes: Routes = [{
  path:"login",component:LoginPageComponent,canActivate:[PublicRouteGuard]
},{
  path:"employee",component:EmployeeManagementComponent,canActivate:[AuthGuard]
}
,{
  path:"employee/create",component:CreateEmployeeComponent,canActivate:[AuthGuard,RoleAuthGuard],
  data:{roles:["ROLE_ADMIN"]}
},
{
  path:"employee/:id",component:ViewEmployeeComponent,canActivate:[AuthGuard]
}
,{
  path:"ticket",component:TicketManagementComponent,canActivate:[AuthGuard]
},{
  path:"ticket/create",component:CreateTicketComponent,canActivate:[AuthGuard,RoleAuthGuard],
  data:{roles:["ROLE_ADMIN"]}
},{
  path:"ticket/:id",component:ViewTicketComponent,canActivate:[AuthGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
