import './HomePage.css';
import { useState, useEffect } from 'react';
import GameSearch from '../../services/GameSearch.service';
import GameList from '../../components/GameList/GameList';

const HomePage = ({ search }) => {
    const [games, setGames] = useState([]);
    const [order, setOrder] = useState(null);
    const [genres, setGenres] = useState(null);

    const handleOrder = (event) => {
        console.log(event.target.name)
        switch (event.target.name) {
            case "orderby":
                setOrder(event.target.value);
                break;
            case "genres":
                setGenres(event.target.value);
                break;
        }
    }
    useEffect(() => {
        GameSearch.getSearchGames(search, order).then((games) => {
            setGames(games.results);
        })
    }, [search, order]);

    return (
        <div className='w-full flex flex-col gap-10'>
            <div className='flex gap-5 text-left'>
                <div>
                    <label htmlFor="orderby" className="block mb-2 text-sm font-medium text-white dark:text-white">Order by</label>
                    <select defaultValue={'-released'} onChange={handleOrder} name="orderby" className="bg-[#202020] w-full text-white text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#202020] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white">
                        <option value="-relevance">Relevance</option>
                        <option value="-created">Date added</option>
                        <option value="name">Name</option>
                        <option value="-released">Release date</option>
                        <option value="-added">Popularity</option>
                        <option value="-rating">Average rating</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="genres" className="block mb-2 text-sm font-medium text-white dark:text-white">Genres</label>
                    <select defaultValue={'CA'} name="genres" className="bg-[#202020] w-full text-white text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#202020] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white">
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
            </div>
            {
                <GameList games={games} />
            }
        </div>
    )
}

export default HomePage;