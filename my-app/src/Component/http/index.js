import axios from "axios";

const $host = axios.create({
    baseURL: 'https://link-shortening-service.herokuapp.com/'
})

export {
    $host,
}