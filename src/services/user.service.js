let url = 'http://localhost:5000';

const getUsers = () => {
    return fetch(url + '/users')
        .then(response => response.json())
};

const getUser = (id) => {
    return fetch(url + '/users/' + id)
        .then(response => response.json())
};

const postUser = (user) => {
    return fetch(url + '/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json());
};

const updateUsers = (user, id) => {
    return fetch(url + '/users/' + id, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json())
};

const deleteUser = (id) => {
    return fetch(url + '/users/' + id, {
        method: 'DELETE'
    })
        .then(response => response.json());
};

export {getUsers, getUser, postUser, deleteUser, updateUsers};
