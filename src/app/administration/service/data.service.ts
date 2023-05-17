import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'assets/fakedata.json';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<{ users: User[] }>(this.apiUrl)
      .pipe(map((data) => data.users));
  }

  getUserById(userId: number): Observable<User | undefined> {
    return this.getUsers().pipe(
      map((users) => users.find((user) => user.id === userId))
    );
  }
}
