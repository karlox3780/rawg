import InitAxios from './InitAxios.service';

class GameSearch extends InitAxios {
    constructor() {
        super("games");
    }
    getSearchGames(gameName, order, genre, page, dates, tags, developers, publishers) {
        return this.axios.get('', { params: { key: process.env.REACT_APP_API_KEY, search: gameName, page_size: 50, genres: genre, ordering: order, metacritic: dates ? '' : '80,100', page: page, dates: dates, tags: tags, developers: developers, publishers: publishers } })
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