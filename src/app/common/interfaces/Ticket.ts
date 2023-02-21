import { Employee } from "./Employee";

export interface Ticket{
    ticketNumber:number|null;
    title:string;
    description:string;
    severity:string;
    status:string;
    assignee:Employee;
    watchers:Employee[];
}