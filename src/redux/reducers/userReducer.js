import * as actionTypes from '../actionTypes/UserTypes';


const initialState = {
    all_users: [],    // used to fill dropdowns
    user: {
        id: "" // User ID
    },
    success_message: "",
    error_message: "",
    list_spinner: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LIST_USERS:
            return {
                ...state,
                list_spinner: true
            };
        case actionTypes.LIST_USERS_SUCCESS:
            return {
                ...state,
                tasks: action.data,
                list_spinner: false
            };
        case actionTypes.LIST_USERS_FAILURE:
            return {
                ...state,
                error_message: action.error,
                list_spinner: false
            };
        default:
            return state;
    }
}


export default userReducer;