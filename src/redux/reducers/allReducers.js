import {userModel} from '../../config/index';
import {
    FORM_USER,
    FORM_MESSAGE,
    USER, INPUT_ERROR
} from "../actions/users.actions";

let initialState = {
    formUser: '',
    message: {class: '', text: ''},
    user: userModel,
    inputError: '',
};

export const domReducer = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case FORM_USER:
            return {...state, formUser: action.payload};
        case FORM_MESSAGE:
            return {...state, message: {...action.payload}};
        case USER:
            return {...state, user: {...action.payload}};
        case INPUT_ERROR:
            return {...state, inputError: action.payload};
        default:
            return state;
    }
};
