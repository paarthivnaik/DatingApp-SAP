import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../_models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUrl + 'users');
  }

  getUser(id): Observable<Users> {
    return this.http.get<Users>(this.baseUrl + 'users/' + id);
  }

  updateUser(id: number, user: Users) {
    return this.http.put(this.baseUrl + 'users/' + id, user);
  }
  setMainPhoto(userId: number, id: number) {
    return this.http.post(this.baseUrl + 'users/' + userId + '/photos/' + id + '/setMain',{});
  }
}
