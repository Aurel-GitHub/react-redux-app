import { GET_POSTS } from "../actions/post.action";


const initialeState = {};

export default function postReducer(state = initialeState, action) {
    switch (action.type) {
        case GET_POSTS:
            return action.payload;
        default: 
            return state;
    }
}