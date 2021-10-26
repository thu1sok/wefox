import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostInterface } from 'src/app/shared/interface/post.interface';
import { ADD_POST_ACTION } from 'src/app/shared/stored/actions';
import { AppState } from 'src/app/shared/stored/main-state';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  constructor(
      private store: Store<AppState>
  ) {}

  ngOnInit(): void {
  }

  addPost(post: PostInterface) {
    this.store.dispatch({type: ADD_POST_ACTION, post: {post}});
  }
}
