import { Injectable } from '@angular/core';
import { Reunion } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReunionService {
  apiUrl = 'http://localhost:3000/reunion'

  constructor(private http: HttpClient) { }

  getReunions(): Observable<Reunion[]> {
    return this.http.get<Reunion[]>(this.apiUrl);
  }

  createReunion(reunion: Reunion): Observable<object> {
    return this.http.post(`${this.apiUrl}`, reunion)
  }
  deleteReunion(id:string):Observable<Object>{
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
