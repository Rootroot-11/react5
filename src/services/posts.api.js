const getPosts = ()=> {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
}

export {getPosts}
