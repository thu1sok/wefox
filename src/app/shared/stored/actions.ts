import { createAction, props } from '@ngrx/store';
import { PostInterface } from '../interface/post.interface';

export const ADD_POST_ACTION = "[Add Post] Add post";
export const ADD_POST_ACTION_SUCCESS = '[Add Post] Add post success';
export const LIST_POST_ACTION = "[List Post] List post";
export const LIST_POST_ACTION_SUCCESS = "[List Post Success] List post success";
export const DELETE_POST_ACTION = "[Delete Post] Delete post";
export const DELETE_POST_ACTION_SUCCESS = "[Delete Post Success] Delete post success";
export const UPDATE_POST_ACTION = "[Update Post] Update post";
export const UPDATE_POST_ACTION_SUCCESS = "[Update Post Success] Update post success";
export const POST_ERROR = '[Error Post] Error post';

export const AddPost = createAction(ADD_POST_ACTION, props<{post: PostInterface}>());
export const AddPostSuccess = createAction(ADD_POST_ACTION_SUCCESS, props<{post: PostInterface}>());
export const ListPost = createAction(LIST_POST_ACTION);
export const ListPostSuccess = createAction(LIST_POST_ACTION_SUCCESS, props<{post: PostInterface[]}>());
export const DeletePost = createAction(DELETE_POST_ACTION, props<{id: string}>());
export const DeletePostSuccess = createAction(DELETE_POST_ACTION_SUCCESS, props<{id: string, post: PostInterface[]}>());
export const UpdatePost = createAction(UPDATE_POST_ACTION, props<{id: string, post: PostInterface}>());
export const UpdatePostSuccess = createAction(UPDATE_POST_ACTION_SUCCESS, props<{id: string, post: PostInterface[]}>());
export const PostError = createAction(POST_ERROR, props<{message: string}>());
