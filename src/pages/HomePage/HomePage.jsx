import './HomePage.css';
import { useState, useEffect } from 'react';
import GameSearch from '../../services/GameSearch.service';
import GenresService from '../../services/Genres.service';
import GameList from '../../components/GameList/GameList';
import Spinner from '../../components/Spinner/Spinner';
import Title from '../../components/Title/Title';
import { useLocation } from 'react-router-dom';

const HomePage = ({ search, title, subtitle }) => {
    const [loading, setLoading] = useState(true);
    const [games, setGames] = useState([]);
    const [order, setOrder] = useState(null);
    const [genre, setGenre] = useState(null);
    const [genres, setGenres] = useState(null);
    const location = useLocation();
    const path = location.pathname;

    const handleOrder = (event) => {
        setLoading(true);
        switch (event.target.name) {
            case "orderby":
                setOrder(event.target.value);
                break;
            case "genres":
                setGenre(event.target.value);
                break;
            default:
                break;
        }
    }
    useEffect(() => {
        GameSearch
            .getSearchGames(search, order, genre)
            .then((games) => {
                setGames(games.results);
            })
            .catch((err) => {
                console.error(err.response.data.errorMessage);
            })
            .finally(() => {
                setLoading(false);
            });

        GenresService
            .getGenres()
            .then((genres) => {
                setGenres(genres.results)
            })
            .catch((err) => {
                console.error(err.response.data.errorMessage);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [search, order, genre]);

    return (
        <div className='w-full flex flex-col gap-5'>
            <Title title={title} subtitle={subtitle}></Title>
            <div className='flex gap-5 text-left'>
                <div>
                    <label htmlFor="orderby" className="block mb-2 text-sm font-medium text-white dark:text-white">Order by</label>
                    <select defaultValue={'-relevance'} onChange={handleOrder} name="orderby" className="bg-[#202020] w-full text-white text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#202020] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white">
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
                    <select defaultValue={''} onChange={handleOrder} name="genres" className="bg-[#202020] w-full min-w-[175px] text-white text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#202020] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white">
                        <option value=''>All</option>
                        {
                            genres?.map(genre => <option key={genre.id} value={genre.id} >{genre.name}</option>)
                        }
                    </select>
                </div>
            </div>
            {
                loading ? <Spinner></Spinner> : <GameList games={games} />
            }
        </div>
    )
}

export default HomePage;