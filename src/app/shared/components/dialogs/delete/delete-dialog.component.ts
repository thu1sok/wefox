import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { PostInterface } from 'src/app/shared/interface/post.interface';
import { DELETE_POST_ACTION } from 'src/app/shared/stored/actions';
import { AppState } from 'src/app/shared/stored/main-state';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: { editable: boolean, post: PostInterface }
  ) { }

  ngOnInit(): void {
  }

  confirmDelete() {
    this.store.dispatch({type: DELETE_POST_ACTION, id: this.data.post.id });
  }

}
