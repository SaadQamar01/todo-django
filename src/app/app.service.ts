import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url + "users/", user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}users/`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}user/${id}`);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.url}user/${id}`, user);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.url}user/${id}`);
  }

}
