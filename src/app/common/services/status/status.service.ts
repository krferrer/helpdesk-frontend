import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericResponse } from '../../response/GenericResponse';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  getStatuses():Observable<GenericResponse>{
    return this.http.get<GenericResponse>("http://localhost:8080/api/status",{withCredentials:true});
  }

  constructor(private http:HttpClient) { }
}
