import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }
  AddtoCart$= new BehaviorSubject<any[]>([]);
  UpdateCart():Observable<any>{
    return this.AddtoCart$
  }
}
