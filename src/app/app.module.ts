import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './Login/pages/login-page/login-page.component';
import { InputFieldComponent } from './common/components/input-field/input-field.component';
import { ButtonComponent } from './common/components/button/button.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { EmployeeManagementComponent } from './Employee/pages/employee-management/employee-management.component';
import { AuthenthicatedPageLayoutComponent } from './common/components/authenthicated-page-layout/authenthicated-page-layout.component';
import { TicketManagementComponent } from './Ticket/pages/ticket-management/ticket-management.component';
import { CardComponent } from './common/components/card/card.component';
import { ViewEmployeeComponent } from './Employee/pages/view-employee/view-employee.component';
import { SelectComponent } from './common/components/select/select.component';
import { CreateEmployeeComponent } from './Employee/pages/create-employee/create-employee.component';
import { PasswordInputFieldComponent } from './common/components/password-input-field/password-input-field.component';
import { CreateTicketComponent } from './Ticket/pages/create-ticket/create-ticket.component';
import { ViewTicketComponent } from './Ticket/pages/view-ticket/view-ticket.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    InputFieldComponent,
    ButtonComponent,
    EmployeeManagementComponent,
    AuthenthicatedPageLayoutComponent,
    TicketManagementComponent,
    CardComponent,
    ViewEmployeeComponent,
    SelectComponent,
    CreateEmployeeComponent,
    PasswordInputFieldComponent,
    CreateTicketComponent,
    ViewTicketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
