import { Role } from "./Role";
import { Ticket } from "./Ticket";

export interface UpdateEmployee{
    id:number;
    username:string;
    role:Role;
    employeeNumber:number;
    firstName:string;
    middleName:string;
    lastName:string;
    department:string;
    watchTickets:Ticket[];
    assignedTicket:Ticket;
}