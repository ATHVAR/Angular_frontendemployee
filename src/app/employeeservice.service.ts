import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(public http:HttpClient) { }
  getemployees(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
