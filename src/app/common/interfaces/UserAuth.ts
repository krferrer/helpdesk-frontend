import { Employee } from "./Employee";

export interface UserAuth {
    user: Employee;
    accessToken: String;
}