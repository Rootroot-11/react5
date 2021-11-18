export default (state = {users: []}, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {...state, users: action.payload};
        case 'DELETE':
            return {
                ...state, users: state.users.filter((user) => user._id
                    !== action.payload)
            };
        case 'CREATE':
            return {...state, users: [...state.users, action.payload]};
        case 'UPDATE':
            return {...};
        default:
            return state;
    }
}
