import InitAxios from './InitAxios.service';

class GameSearch extends InitAxios {
    constructor() {
        super("games");
    }
    getSearchGames(gameName, order, genre) {
        return this.axios.get('', { params: { key: process.env.REACT_APP_API_KEY, search: gameName, page_size: 50, genres: genre, ordering: order ? order : '-released', metacritic: '80,100' } })
            .then((response) => response.data)
            .catch({ error: "error" })
    }
    getGamebyId(id) {
        return this.axios.get(`${id}`, { params: { key: process.env.REACT_APP_API_KEY } })
            .then((response) => response.data)
            .catch({ error: "error" });
    }
}

export default new GameSearch();