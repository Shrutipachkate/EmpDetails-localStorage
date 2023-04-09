import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DetailsService {

url="http://localhost:3000/employeedetails"
  constructor(private http: HttpClient) { }
  getList(){
    return this.http.get(this.url);
  }
  // will get this data from the form
  saveDetails(data: any){
    return this.http.post(this.url,data)
  }

  deleteDetails(id: any){
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentDetails(id: any){
    return this.http.get(`${this.url}/${id}`)
  }

  updateDetails(id: any, data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }
}
