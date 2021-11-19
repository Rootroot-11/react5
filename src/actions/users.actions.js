import {deleteUser, getUsers, postUser} from "../services/user.service";

export const getAllUsers = () => async (dispatch) => {
    try {
        const {data} = await getUsers();

        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (e) {
        console.log(e.message);
    }
};

export const createUser = (user) => async (dispatch) => {
    try {
        const {data} = await postUser(user);
        console.log(data)

        dispatch({type: 'CREATE', payload: data})

    } catch (e) {
        console.log(e)
    }
};

export const deleteOneUser = (id) => async (dispatch) => {
    try {
        await deleteUser(id)

        dispatch({type: 'DELETE', payload: id})
    } catch (e) {
        console.log(e)
    }
};
