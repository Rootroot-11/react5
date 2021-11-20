import Select from 'react-select';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {stateFormMessage, stateFormUser, stateInputError, stateUser} from '../../redux/actions/users.actions';

// import './FormUser.css';
import {postUser, deleteUser, updateUsers} from '../../services/user.service';
import {regularPassword, regularEmail, selectOptions, userModel} from '../../config';


export default function FormUser() {
    const dispatch = useDispatch();
    const {domReducer} = useSelector(state => state);
    const {user: userForm} = domReducer;
    const nameTitle = {firstName: userForm.firstName};

    const hideForm = () => {
        dispatch(stateFormUser(''));
        dispatch(stateUser(userModel));
        dispatch(stateFormMessage({class: '', text: ''}));
        dispatch(stateInputError(''));
    };

    const onchange = (e) => {
        const isSelect = selectOptions.find(item => item.value === e.value);

        if (isSelect) {
            dispatch(stateUser({...userForm, type: e.value}));
        } else {
            const {target} = e;
            dispatch(stateUser({...userForm, [target.name]: target.value}));
        }

        dispatch(stateInputError(''));
        dispatch(stateFormMessage({class: '', text: ''}));
    };

    const handleSubmitSave = (e) => {
        e.preventDefault();
        const isValidInput = validateKey(e.target);

        if (isValidInput) {
            dispatch(stateInputError(isValidInput));
            dispatch(stateFormMessage({class: 'error', text: 'Error message'}));;
        } else {
            userForm._id ? updateUsers(userForm, userForm._id) : postUser(userForm);
            dispatch(stateFormMessage({class: 'success', text: 'Success message'}));
        }
    };

    const validateKey = (inputs) => {
        for (const key in userForm) {
            switch (key) {
                case 'userName':
                case 'firstName':
                case 'lastName':
                    if (inputs[key].value.length < 4) return key;
                    break;
                case 'email':
                    if (!regularEmail.test(String(inputs[key].value).toLowerCase())) return key;
                    break
                case 'password':
                    if (!regularPassword.test(String(inputs[key].value).toLowerCase())) return key;
                    break
                case 'repeatPassword':
                    if (inputs[key].value !== inputs.password.value) return key;
                    break
            }
        }
    };

    const handleSubmitDelete = (e) => {
        e.preventDefault();

        dispatch(stateFormMessage({class: 'success', text: 'Success message'}));
        dispatch(stateUser(userModel));
        deleteUser(userForm._id);
        dispatch(stateInputError(''));

        setTimeout(() => {
            dispatch(stateFormMessage({class: '', text: ''}));
        }, 1500);
    };

    const isOptions = (type) => {
        return selectOptions.find(item => item.value === type);
    };

    return (
        <div className={`form-user ${domReducer.formUser}`}>
            <button className={'btn-close'} onClick={hideForm}>X</button>
            <div className={'form-user__name'}>
                {userForm.firstName.length > 0 ? `${nameTitle.firstName} ${userForm.lastName}` : 'Create new user'}
            </div>

            <form onSubmit={handleSubmitSave}>
                <label className={domReducer.inputError === 'userName' ? 'error' : ''}>
                    Username*
                    <input type="text" name={'userName'} onChange={onchange} value={userForm.userName || ''}/>
                    <span>Error message</span>
                </label>

                <label className={domReducer.inputError === 'firstName' ? 'error' : ''}>
                    First name*
                    <input type="text" name={'firstName'} onChange={onchange} value={userForm.firstName || ''}/>
                    <span>Error message</span>
                </label>

                <label className={domReducer.inputError === 'lastName' ? 'error' : ''}>
                    Last name*
                    <input type="text" name={'lastName'} onChange={onchange} value={userForm.lastName || ''}/>
                    <span>Error message</span>
                </label>

                <label className={domReducer.inputError === 'email' ? 'error' : ''}>
                    Email*
                    <input type="text" name={'email'} onChange={onchange} value={userForm.email || ''}/>
                    <span>Error message</span>
                </label>

                <label>
                    Type*
                    <Select
                        name={'type'}
                        onChange={onchange}
                        classNamePrefix="select"
                        value={isOptions(userForm.type)}
                        options={selectOptions}/>
                </label>

                <label className={domReducer.inputError === 'password' ? 'error' : ''}>
                    Password*
                    <input type="password" name={'password'} onChange={onchange} value={userForm.password || ''}/>
                    <span>Error message</span>
                </label>

                <label className={domReducer.inputError === 'repeatPassword' ? 'error' : ''}>
                    Repeat password*
                    <input type="password" name={'repeatPassword'} onChange={onchange} value={userForm.repeatPassword || ''}/>
                    <span>Error message</span>
                </label>

                <div className={userForm._id ? 'form-user__btns update' : 'form-user__btns'}>
                    <button className={'form-user__delete'} onClick={handleSubmitDelete}>Delete</button>
                    <button className={'form-user__save'}>{userForm._id ? 'Save' : 'Create'}</button>
                </div>
            </form>
        </div>
    );
};
