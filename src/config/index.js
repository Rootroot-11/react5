const regularEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regularPassword = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;

const selectOptions = [
    {value: 'driver', label: 'Driver'},
    {value: 'administrator', label: 'Administrator'},
];

const userModel = {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    type: selectOptions[0].value,
    password: '',
    repeatPassword: '',
};

export {
    regularEmail,
    regularPassword,
    selectOptions,
    userModel
};
