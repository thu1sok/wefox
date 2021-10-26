import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

// Constant
import { API_CALLS } from 'src/app/api/constants/api-call.constant';
// Service
import { ApiService } from 'src/app/api/services/api.services';
// Interface
import { PostInterface } from 'src/app/shared/interface/post.interface';

@Injectable()
export class PostService {
  private API_CALLS = API_CALLS;

  constructor(
    private apiCall: ApiService,
    private snackBarService: MatSnackBar
  ) {}

  addPost<T>(post: PostInterface): Observable<T> {
    return this.apiCall.post(this.API_CALLS.create, post);
  }

  loadPost<PostInterface>(): Observable<PostInterface[]> {
    return this.apiCall.get(this.API_CALLS.list);
  }

  deletePost<T>(id: string): Observable<PostInterface[]> {
    const removeUrl = this.API_CALLS.remove.replace('{$id}', id);
    return this.apiCall.delete(removeUrl);
  }

  updatePost<T>(id: string, post: PostInterface): Observable<PostInterface[]> {
    const updateUrl = this.API_CALLS.update.replace('{$id}', id);
    return this.apiCall.put(updateUrl, post);
  }

  showMessage(message: string) : void {
    let config = new MatSnackBarConfig();
    config.duration = 3000;
    this.snackBarService.open(message, null, config);
  }

}