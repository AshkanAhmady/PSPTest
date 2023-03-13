import axios from "axios"

export function fetchTodos() {
    return axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.data.splice(0, 5))
        .catch(err => err)
}