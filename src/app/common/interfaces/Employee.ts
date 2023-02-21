import { Role } from "./Role";
import { Ticket } from "./Ticket";

export interface Employee{
    id:number;
    username:string;
    role:Role;
    employeeNumber:number;
    firstName:string;
    middleName:string;
    lastName:string;
    department:string;
    watchTickets:Ticket[];
    ticket:Ticket;

}