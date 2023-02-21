import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericResponse } from '../../response/GenericResponse';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  getRoles():Observable<GenericResponse>{
    return this.http.get<GenericResponse>("http://localhost:8080/api/role",{withCredentials:true});
  }

  constructor(private http:HttpClient) {}
}
