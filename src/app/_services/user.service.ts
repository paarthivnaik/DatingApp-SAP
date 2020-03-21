import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../_models/users';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUrl + 'users', httpOptions);
  }
  getUser(id): Observable<Users> {
    return this.http.get<Users>(this.baseUrl + 'users/' + id, httpOptions);
  }
}
