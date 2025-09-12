import { combineReducers} from "@reduxjs/toolkit";
import authReducer from "../Slices/authSlice"
import viewCourseReducer from "../Slices/viewCourseSlice"

export const rootReducer = combineReducers({
    auth: authReducer,
    viewCourse: viewCourseReducer,
});