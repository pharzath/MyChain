import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private mySubject = new Subject<any>()

  constructor() { }

  publishData(data: any) {
    this.mySubject.next(data);
  }

  getObservable(): Subject<any> {
    return this.mySubject;
  }
}
