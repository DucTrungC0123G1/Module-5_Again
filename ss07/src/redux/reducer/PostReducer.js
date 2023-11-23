import {ADD_NEW_POST, GET_ALL_POST, REMOVE_POST} from "../constant";

const postReducer = (posts = [], action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_ALL_POST:
            return payload;
        case ADD_NEW_POST:
            return [...posts, payload];
        case REMOVE_POST:
            let temp = [...posts];
            temp = temp.filter((value) => value.id !== payload);
            return temp;
        default:
            return posts;
    }
}
export default postReducer;