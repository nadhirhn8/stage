import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl = 'http://localhost:3000/liste'

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.apiUrl);
  }

  createEmployee(employe: Employe): Observable<object> {
    return this.http.post(`${this.apiUrl}`, employe)
  }
  deleteEmployee(id:string):Observable<Object>{
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
