import axios from "axios";

class GameSearch {
    constructor() {
        this.baseUrl = `${process.env.REACT_APP_BASE_API_URL}games?key=${process.env.REACT_APP_API_KEY}`;
    }

    getSearchGames(gameName) {
        return axios.get(gameName.length > 0 ? `${this.baseUrl}&search=${gameName}` : this.baseUrl)
            .then((response) => response.data)
            .catch({ error: "error" })
    }
}

export default new GameSearch();