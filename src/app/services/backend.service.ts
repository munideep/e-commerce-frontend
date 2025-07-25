import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject,switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }
userInput$= new Subject<any>();
  userData(obj: Object){
    this.userInput$.next(obj);
  }

  getUserData(data: object): Observable<any>{
    return this.userInput$.pipe(
    switchMap((data) => {
      const params = new HttpParams()
        .set('username', data.username)
        .set('password', data.password)
        .set('email', data.email);

      return this.http.get('http://localhost:3000/users', { params });
    })
  );
  }


  updateUserData(data: object): Observable<any>{
    return this.http.post('http://localhost:3000/updateusers',data);
  }


}
