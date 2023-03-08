import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { API_CONTANTS } from 'src/app/contants/ApiConstants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signin(requestData:any):Observable<any>{
    return this.http.post(
      API_CONTANTS.AUTH_API + 'signin',
      {
        Email:requestData.Email,
        Role:requestData.Role,
        Password:requestData.Password
      },
      httpOptions
    )
  }
}
