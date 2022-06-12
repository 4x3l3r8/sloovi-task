import * as actionTypes from "../actionTypes/TaskTypes"


const initialState = {
    all_tasks: [],    // used to fill dropdowns
    task: {
        assigned_user: "", // <id value from /team api response >, 
        task_date: "", // <date in 'YYYY-MM-DD' format from date field in task >,
        task_time: "", // <time from time field in task>,seconds in integer format(for ex=01:30am means 5400 seconds) ,
        is_completed: "", // < 0 or 1 integer data type>,
        time_zone: "", // < Currenttimezone value in seconds and data type is integer>,(for ex= +05:30 means 19800 seconds),
        task_msg: "", // < task description from task description field in task >
    },
    success_message: "",
    error_message: "",
    validation_errors: null,
    list_spinner: false,
    create_update_spinner: false
};

const taskReducer = function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_TASK_DEFAULTS:
            return {
                ...state,
                task: { ...state.task },
                success_message: "",
                error_message: "",
                validation_errors: null,
                list_spinner: false,
                create_update_spinner: false
            };
        case actionTypes.HANDLE_TASK_TITLE:
            return {
                ...state,
                task: { ...state.task, title: action.data }
            };
        case actionTypes.LIST_TASKS:
            return {
                ...state,
                list_spinner: true
            };
        case actionTypes.LIST_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.data,
                list_spinner: false
            };
        case actionTypes.LIST_TASKS_FAILURE:
            return {
                ...state,
                error_message: action.error,
                list_spinner: false
            };
        case actionTypes.LIST_ALL_TASKS:
            return {
                ...state,
                all_tasks: action.data
            };
        case actionTypes.CREATE_TASKS:
            return {
                ...state,
                create_update_spinner: true
            };
        case actionTypes.CREATE_TASKS_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                task: action.data.data,
                success_message: action.data.message,
                error_message: "",
                validation_errors: null
            };
        case actionTypes.CREATE_TASKS_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message,
                validation_errors: action.error.errors,
                success_message: ""
            };
        case actionTypes.SHOW_TASK:
            return {
                ...state,
                create_update_spinner: true
            };
        case actionTypes.SHOW_TASK_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                task: action.data.data
            };
        case actionTypes.SHOW_TASK_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message
            };
        case actionTypes.EDIT_TASKS:
            return {
                ...state,
                create_update_spinner: true
            };
        case actionTypes.EDIT_TASKS_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                task: action.data.data,
                success_message: action.data.message,
                error_message: "",
                validation_errors: null
            };
        case actionTypes.EDIT_TASKS_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message,
                validation_errors: action.error.errors,
                success_message: ""
            };
        case actionTypes.DELETE_TASKS:
            return {
                ...state,
                list_spinner: true
            };
        case actionTypes.DELETE_TASKS_SUCCESS:
            let cats = state.tasks;
            cats.data = state.tasks.data.filter(item => item.id !== action.id);

            return {
                ...state,
                list_spinner: false,
                tasks: cats,
                success_message: action.message,
                error_message: ''
            };
        case actionTypes.DELETE_TASKS_FAILURE:
            return {
                ...state,
                list_spinner: false,
                error_message: action.error.message,
                success_message: ''
            };
        default:
            return state;
    }
};

export default taskReducer;