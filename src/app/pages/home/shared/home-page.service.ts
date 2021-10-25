import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { API_CALLS } from 'src/app/api/constants/api-call.constant';
import { ApiService } from 'src/app/api/services/api.services';


@Injectable()
export class HomePageService {
  private getList = API_CALLS.list;

  constructor(
    private apiCall: ApiService
  ) {}

  loadPost<T>(): Observable<T> {
    return this.apiCall.get(this.getList);
  }

}