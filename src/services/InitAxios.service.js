import axios from 'axios';

class InitAxios {
    constructor(path) {
        this.axios = axios.create({
            baseURL: process.env.BASE_API_URL + path
        })
    }
}

export default InitAxios;