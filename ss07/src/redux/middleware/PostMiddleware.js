import axios from "axios";
import {ADD_NEW_POST, GET_ALL_POST, REMOVE_POST} from "../constant";

export const getAllPost = () => async (dispatch) => {
    const res = await axios.get(`http://localhost:8080/posts`)
    dispatch({
        type: GET_ALL_POST,
        payload: res.data
    })
}

export const createNewPost = (value) => async (dispatch) => {
    await axios.post(`http://localhost:8080/posts`, value)
    dispatch({
        type: ADD_NEW_POST,
        payload: value
    })
}

export const removeById = (id) => async (dispatch) => {
    await axios.delete(`http://localhost:8080/post/${id}`)
    dispatch({
        type: REMOVE_POST,
        payload: id
    })

}