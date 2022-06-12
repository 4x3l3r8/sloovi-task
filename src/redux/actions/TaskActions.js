import {
    LIST_TASKS,
    LIST_TASKS_SUCCESS,
    LIST_TASKS_FAILURE,
    CREATE_TASKS,
    CREATE_TASKS_SUCCESS,
    CREATE_TASKS_FAILURE,
    EDIT_TASKS,
    EDIT_TASKS_SUCCESS,
    EDIT_TASKS_FAILURE,
    SHOW_TASK,
    SHOW_TASK_SUCCESS,
    SHOW_TASK_FAILURE,
    DELETE_TASKS,
    DELETE_TASKS_SUCCESS,
    DELETE_TASKS_FAILURE,
    SET_TASK_DEFAULTS,
    HANDLE_TASK_TITLE,
    LIST_ALL_TASKS
} from '../actionTypes/TaskTypes';

import Task from '../../apis/Task';

function handleTaskTitle(title) {
    return function (dispatch, getState) {

        dispatch({
            type: HANDLE_TASK_TITLE,
            data: title
        })
    }
}

function setTaskDefaults() {

    return function (dispatch, getState) {

        dispatch({
            type: SET_TASK_DEFAULTS
        });
    }
}

/**
 * list Tasks action
 */
function listTasks() {

    return function (dispatch, getState) {

        // start sending request (first dispatch)
        dispatch({
            type: LIST_TASKS
        });


        // async call must dispatch action whether on success or failure
        Task.listAll().then(response => {
            dispatch({
                type: LIST_TASKS_SUCCESS,
                data: response.data.data
            });
        }).catch(error => {
            dispatch({
                type: LIST_TASKS_FAILURE,
                error: error.response.data
            });
        });
    }
}

/**
 * add task action
 */
function addTask(title, cb) {

    return function (dispatch, getState) {

        // start creation show spinner
        dispatch({
            type: CREATE_TASKS
        });

        // async call must dispatch action whether on success or failure
        Task.add(title).then(response => {
            dispatch({
                type: CREATE_TASKS_SUCCESS,
                data: response.data
            });

            cb();
        }).catch(error => {
            dispatch({
                type: CREATE_TASKS_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * show task action
 */
function showTask(id) {
    return function (dispatch, getState) {
        // start creation show spinner
        dispatch({
            type: SHOW_TASK
        });


        // async call must dispatch action whether on success or failure
        Task.showOne(id).then(response => {
            dispatch({
                type: SHOW_TASK_SUCCESS,
                data: response.data
            });

        }).catch(error => {
            dispatch({
                type: SHOW_TASK_FAILURE,
                error: error.response.data
            });
        });
    }
}

/**
 * edit task action
 */
function editTask(body, id, cb) {
    return function (dispatch, getState) {
        // start creation show spinner
        dispatch({
            type: EDIT_TASKS
        });


        // async call must dispatch action whether on success or failure
        Task.edit(body, id).then(response => {
            dispatch({
                type: EDIT_TASKS_SUCCESS,
                data: response.data
            });

            cb();
        }).catch(error => {
            dispatch({
                type: EDIT_TASKS_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * delete task action
 */
function deleteTask(id) {
    return function (dispatch, getState) {

        // start creation show spinner
        dispatch({
            type: DELETE_TASKS
        });


        // async call must dispatch action whether on success or failure
        Task.remove(id).then(response => {
            dispatch({
                type: DELETE_TASKS_SUCCESS,
                message: response.data.message,
                id: id
            });
        }).catch(error => {
            dispatch({
                type: DELETE_TASKS_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * list all categories action
 * this function used as a helper action for example to populate dropdowns
 * in other forms
 */
function listAllTasks() {

    return function (dispatch, getState) {

        // async call
        Task.listAll().then(response => {
            dispatch({
                type: LIST_ALL_TASKS,
                data: response.data.data
            });
        });
    }
}

export {
    listTasks,
    handleTaskTitle,
    addTask,
    showTask,
    editTask,
    deleteTask,
    setTaskDefaults,
    listAllTasks
};