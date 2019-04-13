import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';


const userList = [
  { firstName: 'John', lastName: 'Smith', gender: 'M', dateOfBirth: "2014-01-01T23:28:56.782Z", department: 'Finance' },
  { firstName: 'Mark', lastName: 'Lynch', gender: 'M', dateOfBirth: "2014-01-01T23:28:56.782Z", department: 'Finance' },
  { firstName: 'James', lastName: 'Hamill', gender: 'M', dateOfBirth: "2014-01-01T23:28:56.782Z", department: 'Finance' },
  { firstName: 'Micheal', lastName: 'Toby', gender: 'M', dateOfBirth: "2014-01-01T23:28:56.782Z", department: 'Finance' },
  { firstName: 'Robert', lastName: 'Barney', gender: 'M', dateOfBirth: "2014-01-01T23:28:56.782Z", department: 'Finance' },
  { firstName: 'Mary', lastName: 'Ricks', gender: 'F', dateOfBirth: "2014-01-01T23:28:56.782Z", department: 'Finance' },
  { firstName: 'Darth', lastName: 'Vader', gender: 'M', dateOfBirth: "2014-01-01T23:28:56.782Z", department: 'Finance' },
  { firstName: 'R2', lastName: 'D2', gender: 'M', dateOfBirth: "2014-01-01T23:28:56.782Z", department: 'Finance' },
  { firstName: 'Luke', lastName: 'Skywalker', gender: 'M', dateOfBirth: "2014-01-01T23:28:56.782Z", department: 'Finance' },
  { firstName: 'Han', lastName: 'Solo', gender: 'M', dateOfBirth: "2014-01-01T23:28:56.782Z", department: 'Finance' }
];

const host = 'http://localhost:4200/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: User) {
    const registerURL = `${host}/employees`;
    return this.http.post(registerURL, user);
  }
  getList(): Observable<any> {
    const listURL = `${host}/employees?sortBy=ASC&orderBy=firstName`;
    return this.http.get(listURL);
    //return of(userList);
  }
}
