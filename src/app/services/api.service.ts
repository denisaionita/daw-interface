import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  registerUser(userInfo) {
    return this.http.post(`http://localhost:61124/api/register`, userInfo)
    .map((res:Response) => res.json());
  }

}
