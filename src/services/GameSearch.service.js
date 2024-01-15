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

}

export default new GameSearch();