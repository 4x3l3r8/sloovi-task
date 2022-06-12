import * as actionTypes from '../actionTypes/UserTypes';

import User from "../../apis/User";


/**
 * list Users action
 */
function listUsers() {

    return function (dispatch, getState) {

        // start sending request (first dispatch)
        dispatch({
            type: actionTypes.LIST_USERS
        });


        // async call must dispatch action whether on success or failure
        User.listAll().then(response => {
            dispatch({
                type: actionTypes.LIST_USERS_SUCCESS,
                data: response.data.data
            });
        }).catch(error => {
            dispatch({
                type: actionTypes.LIST_USERS_FAILURE,
                error: error.response.data
            });
        });
    }
}

export {
    listUsers,
}