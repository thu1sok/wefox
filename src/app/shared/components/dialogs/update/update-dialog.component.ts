import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { PostInterface } from 'src/app/shared/interface/post.interface';
import { UPDATE_POST_ACTION } from 'src/app/shared/stored/actions';
// 
import { AppState } from 'src/app/shared/stored/main-state';


@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: { editable: boolean, post: PostInterface }
  ) {}

  ngOnInit(): void {
  }

  updatePost(post: PostInterface) {
    this.store.dispatch({type: UPDATE_POST_ACTION, id: this.data.post.id, post: post});
  }
}
