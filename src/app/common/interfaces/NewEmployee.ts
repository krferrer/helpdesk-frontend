import { Role } from "./Role";

export interface NewEmployee{
    firstName:string,
    middleName:string,
    lastName:string,
    department:string,
    username:string,
    password:string,
    role:Role
}