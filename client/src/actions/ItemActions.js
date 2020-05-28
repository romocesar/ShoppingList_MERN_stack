import axios from 'axios';// HTTP client module to make requests and receive responses
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types.js';

export const getItems = () => dispatch => {
    //set ITEMS_LOADING to true
    dispatch(setItemsLoading());
    //Make Get request that uses package.json proxy
    axios
        .get('/api/items')
        .then(res => 
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            }));
};

export const deleteItem = id => dispatch => {
    axios
        .delete(`/api/items/${id}`)
        .then(res => 
            dispatch({
                type: DELETE_ITEM,
                payload: id
            }));
};

export const addItem = item => dispatch => {
   axios
        .post('/api/items', item)
        .then(res =>
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            }));
};

export const setItemsLoading = () => {
    return{
        type: ITEMS_LOADING
    }
}