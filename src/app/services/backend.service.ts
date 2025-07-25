import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject,switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

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

      return this.http.get(`${environment.apiBaseUrl}/users`, { params });
    })
  );
  }


  updateUserData(data: object): Observable<any>{
    return this.http.post(`${environment.apiBaseUrl}/updateusers`,data);
  }


}
