import axios from 'axios';

class InitAxios {
    constructor(path) {
        this.axios = axios.create({
            baseURL: process.env.REACT_APP_BASE_API_URL + path + `?key=${process.env.REACT_APP_API_KEY}`
        })
    }
}

export default InitAxios;