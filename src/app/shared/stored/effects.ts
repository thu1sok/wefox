import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
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
          map((response: any) => AddPostSuccess({ ...response })),
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
          },
          catchError((error: any) => of(PostError(error))))
      )})
    )
  });

  deletePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DeletePost),
      mergeMap((action) => { return this.postService.deletePost(action.id).pipe(
          map((post) => {
            return DeletePostSuccess({ id: action.id, post: post });
          },
          catchError((error: any) => of(PostError(error))))
      )})
    )
  });

  updatePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UpdatePost),
      mergeMap((action) => { return this.postService.updatePost(action.id, action.post).pipe(
          map((post: PostInterface[]) => {
            return UpdatePostSuccess({ id: action.id, post: post });
          },
          catchError((error: any) => of(PostError(error))))
      )})
    )
  });
}