import './HomePage.css';
import { useState, useEffect } from 'react';
import GameSearch from '../../services/GameSearch.service';
import GameList from '../../components/GameList/GameList';

const HomePage = ({ search }) => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        GameSearch.getSearchGames(search).then((games) => {
            setGames(games.results);
        })
    }, [search]);

    return (
        <div className='w-full'>
            {
                <GameList games={games} />
            }
        </div>
    )
}

export default HomePage;