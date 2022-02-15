import axios from "axios";

export const GET_POSTS = 'GET_POST';

export const getPosts = () =>  {
    return (dispatch) => {
        return axios.get('http://localhost:3000/posts?_sort=id&_order=desc')
        .then((res) => {
            dispatch({type: 'GET_POST', payload: res.data})
        })
        .catch((err) => console.log(err))
    }
}