import { GET_USER } from "../actions/user.action";


const initialeState = {};

export default function userReducer(state = initialeState, action) {
    switch(action.type) {
        case GET_USER:
                return action.payload;
        default:
            return state;
    }
}