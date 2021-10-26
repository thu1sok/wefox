import { PostInterface } from "../interface/post.interface";

export interface PostStateInterface {
    post: PostInterface[]
}

export const initialState: PostStateInterface = {
    post: []
}
