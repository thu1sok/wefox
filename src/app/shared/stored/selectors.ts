import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostStateInterface } from "./states";

const getPostState = createFeatureSelector<PostStateInterface>('post');

export const getPosts = createSelector(getPostState, (state) => {
    return state.post;
});