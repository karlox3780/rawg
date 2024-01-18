import InitAxios from './InitAxios.service';

class GameSearch extends InitAxios {
    constructor() {
        super("games");
    }
    getSearchGames(gameName) {
        return this.axios.get('', { params: { search: gameName } })
            .then((response) => response.data)
            .catch({ error: "error" })
    }
    getGamebyId(id) {
        return this.axios.get(`${id}`)
            .then((response) => response.data)
            .catch({ error: "error" });
    }
}

export default new GameSearch();