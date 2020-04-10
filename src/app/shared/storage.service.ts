import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ApiServiceService} from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  data: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(private api: ApiServiceService) {
    this.api.getTopHeadlines().subscribe(resp => {
      this.data.next(resp);
    });
  }

  get newsData(){
    return this.data.asObservable();
  }
  setDataValue(value){
    this.data.next(value);
  }
}
