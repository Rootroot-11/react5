const FORM_USER = 'form_user';
const FORM_MESSAGE = 'form_message';
const USER = 'user';
const INPUT_ERROR = 'input_error';

const stateFormUser = (payload) => {
    return {type: FORM_USER, payload};
}

const stateFormMessage = (payload) => {
    return {type: FORM_MESSAGE, payload};
}

const stateUser = (payload) => {
    return {type: USER, payload};
}

const stateInputError = (payload) => {
    return {type: INPUT_ERROR, payload};
}

export {
    FORM_USER, stateFormUser,
    FORM_MESSAGE, stateFormMessage,
    USER, stateUser,
    INPUT_ERROR, stateInputError
};
