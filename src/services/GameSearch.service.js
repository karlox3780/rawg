import InitAxios from './InitAxios.service';

class GameSearch extends InitAxios {
    constructor() {
        super("games");
    }
    getSearchGames(gameName) {
        return this.axios.get('', { params: { key: process.env.REACT_APP_API_KEY, search: gameName } })
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