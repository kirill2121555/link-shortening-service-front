import axios from "axios";

const $host = axios.create({
    baseURL: 'http://localhost:5000'
//    baseURL: 'https://link-shortening-service.herokuapp.com/'
})

export {
    $host,
}