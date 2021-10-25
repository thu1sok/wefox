import { Injectable } from '@angular/core';

import { API_CALLS } from 'src/app/api/constants/api-call.constant';
import { ApiService } from 'src/app/api/services/api.services';


@Injectable()
export class DialogService {
  private apiCalls = API_CALLS;

  constructor(
    private apiCall: ApiService
  ) {}


}