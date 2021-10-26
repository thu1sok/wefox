import { Action, createReducer, on } from '@ngrx/store';
import { PostInterface } from '../interface/post.interface';
import { AddPostSuccess, DeletePostSuccess, ListPostSuccess, UpdatePostSuccess } from './actions';
import { initialState } from './states';

const _postReducer = createReducer(
  initialState,
  on(AddPostSuccess, (state: any, action: any) => {
    return {
      ...state,
      post: [...state.post, action]
    };
  }),
  on(ListPostSuccess, (state: any, action: any ) => {
    return {
      ...state,
      post: action.post
    };
  }),
  on(DeletePostSuccess, (state: any, action: any ) => {
    let postArray: PostInterface[] = [...state.post];

    const index = postArray.findIndex(function(postItem) {
      return postItem.id === action.id;
    })

    if (index !== -1) {
      postArray.splice(index, 1);
    }

    return {
      ...state,
      post: [...postArray]
    };
  }),
  on(UpdatePostSuccess, (state: any, action: any ) => {
    let postArray: PostInterface[] = [...state.post];

    const index = postArray.findIndex( (postItem) => {
      return postItem.id === action.id;
    });

    if (index !== -1) {
      postArray[index] = action.post;
    }

    return {
      ...state,
      post: [...postArray]
    };
  }),
);

export function postReducer(state: any, action: Action): any {
  return _postReducer(state, action);
}

