import InitAxios from './InitAxios.service';

class GameSearch extends InitAxios {
    constructor() {
        super("games");
    }
    getSearchGames(gameName) {
        console.log(gameName)
        return this.axios.get(gameName.length > 0 && `&search=${gameName}`)
            .then((response) => response.data)
            .catch({ error: "error" })
    }
}

export default new GameSearch();