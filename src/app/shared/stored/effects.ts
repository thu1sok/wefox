import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, exhaustMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

// Actions
import { AddPost, AddPostSuccess, DeletePost, DeletePostSuccess, ListPost, ListPostSuccess, PostError, UpdatePost, UpdatePostSuccess } from './actions';
// Services
import { PostService } from '../services/post.service';
// Interfaces
import { PostInterface } from '../interface/post.interface';


@Injectable()
export class PostEffects {

  constructor(
    private actions$: Actions,
    private postService: PostService
  ) { }

  addPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AddPost),
      exhaustMap(action =>
        this.postService.addPost(action.post).pipe(
          map(
            (post: any) => AddPostSuccess({ ...post })
          ),
          tap({
            complete: () => this.postService.showMessage('Post added successfully'),
            error: () => this.postService.showMessage('Error adding post')
          }),
          catchError((error: any) => of(PostError(error))))
      )
    )
  }
  );

  listPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ListPost),
      mergeMap(() => { return this.postService.loadPost().pipe(
          map((post: PostInterface[]) => {
            return ListPostSuccess({ post:  post });
          }),
          catchError((error: any) => of(PostError(error)))
      )})
    )
  });

  deletePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DeletePost),
      mergeMap((action) => { return this.postService.deletePost(action.id).pipe(
          map((post) => {
            return DeletePostSuccess({ id: action.id, post: post });
          }),
          tap({
            complete: () => this.postService.showMessage('Post deleted successfully'),
            error: () => this.postService.showMessage('Error deleting post')
          }),
          catchError((error: any) => of(PostError(error)))
      )})
    )
  });

  updatePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UpdatePost),
      mergeMap((action) => { return this.postService.updatePost(action.id, action.post).pipe(
          map((post: PostInterface[]) => {
            return UpdatePostSuccess({ id: action.id, post: post });
          }),
          tap({
            complete: () => this.postService.showMessage('Post updated successfully'),
            error: () => this.postService.showMessage('Error updating post')
          }),
          catchError((error: any) => of(PostError(error)))
      )})
    )
  });
}