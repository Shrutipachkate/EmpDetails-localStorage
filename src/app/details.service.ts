import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DetailsService {

// url="http://localhost:3000/employeedetails"
//   constructor(private http: HttpClient) { }
//   getList(){
//     return this.http.get(this.url);
//   }
//   // will get this data from the form
//   saveDetails(data: any): Observable<any>{
//     return this.http.post(this.url,data)
//   }

//   updateDetails(id: number, data:any): Observable<any>{
//     return this.http.put(`${this.url}/${id}`,data)
//   }

//   deleteDetails(id: any): Observable<any>{
//     return this.http.delete(`${this.url}/${id}`)
//   }
//   getCurrentDetails(id: any): Observable<any>{
//     return this.http.get(`${this.url}/${id}`)
//   }



}
