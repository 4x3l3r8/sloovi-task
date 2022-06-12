import { combineReducers } from "redux";
import TaskReducer from "./taskReducer";
import UserReducer from "./userReducer";

const RootReducer = combineReducers({
    task: TaskReducer,
    user: UserReducer,
});

export default RootReducer;
