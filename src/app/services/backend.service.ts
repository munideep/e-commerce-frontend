import { HttpClient, HttpParams } from '@angular/common/http';
import { NONE_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subject,switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

token=false;
userInput$= new Subject<any>();
  userData(obj: Object){
    this.userInput$.next(obj);
  }

  authcheck(value : boolean){
   this.token=value;
  }
  isLoggedIn(){
    return this.token
  }

  getUserData(data: object): Observable<any>{
  return this.userInput$.pipe(
    switchMap((data) => {
      const params = new HttpParams()
        .set('username', data.username)
        .set('password', data.password)
        .set('email', data.email || undefined);

      return this.http.get(`${environment.apiBaseUrl}/users`, { params });
    }) 
  );
  }
  updateUserData(data: object): Observable<any>{
    return this.http.post(`${environment.apiBaseUrl}/updateusers`,data);
  }


}
