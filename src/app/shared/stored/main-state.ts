import { postReducer } from "./reducer";
import { PostStateInterface } from "./states";

export interface AppState {
    post: PostStateInterface
}

export const AppReducer = {
    post: postReducer
}