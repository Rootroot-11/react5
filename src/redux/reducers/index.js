import {combineReducers} from "redux";
import {domReducer} from "./allReducers";

let reducer = combineReducers({domReducer});

export {reducer};
