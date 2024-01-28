import InitAxios from './InitAxios.service';

class Genres extends InitAxios {
    constructor() {
        super("genres");
    }
    getGenres() {
        return this.axios.get('', { params: { key: process.env.REACT_APP_API_KEY } })
            .then((response) => response.data)
            .catch({ error: "error" });
    }
}

export default new Genres();