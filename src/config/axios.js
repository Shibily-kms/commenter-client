import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8000/'
    // baseURL: 'https://commenter.bristlesweb.club/'
})


export default instance;

