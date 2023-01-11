import axios from "axios";

const $host = axios.create({
    baseURL: 'https://link-shortening-service-server.vercel.app/'
})

export {
    $host,
}