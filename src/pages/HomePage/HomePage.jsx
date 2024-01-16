import './HomePage.css';
import { useState, useEffect } from 'react';
import GameSearch from '../../services/GameSearch.service';
import GameList from '../../components/GameList/GameList';

const HomePage = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        GameSearch.getAllGames().then((games) => {
            setGames(games.results);
        })
    }, []);

    return (
        <div className='w-full'>
            {
                <GameList games={games} />
            }
        </div>
    )
}

export default HomePage;