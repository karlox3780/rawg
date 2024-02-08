import InitAxios from './InitAxios.service';

class GameSearch extends InitAxios {
    constructor() {
        super("games");
    }
    getSearchGames(gameName, order, genre, page) {
        return this.axios.get('', { params: { key: process.env.REACT_APP_API_KEY, search: gameName, page_size: 50, genres: genre, ordering: order, metacritic: '80,100', page: page } })
            .then((response) => response.data)
            .catch({ error: "error" })
    }
    getGamebyId(id) {
        return this.axios.get(`${id}`, { params: { key: process.env.REACT_APP_API_KEY } })
            .then((response) => response.data)
            .catch({ error: "error" });
    }
    getGameScreenshots(id) {
        return this.axios.get(`${id}/screenshots`, { params: { key: process.env.REACT_APP_API_KEY } })
            .then((response) => response.data)
            .catch({ error: "error" });
    }
}

export default new GameSearch();