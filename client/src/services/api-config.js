import axios from "axios";

const baseURL = process.env.NODE_ENV === production ? 'http://localhost:4567' : 'http://localhost:4567';

const api = axios.create({
    baseURL: baseURL
})

export default api