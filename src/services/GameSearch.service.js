import InitAxios from './InitAxios.service';

class GameSearch extends InitAxios {
    constructor() {
        super("games");
    }
    getAllGames() {
        return this.axios.get()
            .then((response) => response.data)
            .catch({ error: "error" })
    }
    getSearchGames(gameName) {
        return this.axios.get("&search=" + gameName)
            .then((response) => response.data)
            .catch({ error: "error" })
    }

}

export default new GameSearch();