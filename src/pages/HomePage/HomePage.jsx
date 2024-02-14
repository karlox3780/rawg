import './HomePage.css';
import { useState, useEffect } from 'react';
import GameSearch from '../../services/GameSearch.service';
import GenresService from '../../services/Genres.service';
import GameList from '../../components/GameList/GameList';
import Spinner from '../../components/Spinner/Spinner';
import Title from '../../components/Title/Title';
import SelectOrder from '../../components/SelectOrder/SelectOrder';
import { useParams } from 'react-router-dom';

const HomePage = ({ search, title, subtitle, selectOrder }) => {
    const { genreParam } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [games, setGames] = useState([]);
    const [order, setOrder] = useState(null);
    const [genre, setGenre] = useState(null);
    const [genres, setGenres] = useState(null);
    const [page, setPage] = useState(2);

    const handleOrder = (event) => {
        setIsLoading(true);
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
        const fetchData = () => {
            setIsLoading(true);
            GameSearch
                .getSearchGames(search, order === null ? selectOrder : order, genreParam ? genreParam : genre, page)
                .then((res) => {
                    setGames((prevItems) => [...prevItems, ...res.results]);
                })
                .catch((err) => console.log(err))
                .finally(() => {
                    setIsLoading(false);
                })
                ;

            setPage((prevPage) => prevPage + 1);
        };
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
                return;
            }
            fetchData();
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading, search, order, genre, selectOrder, games, page]);

    useEffect(() => {
        setIsLoading(true);
        GameSearch
            .getSearchGames(search, order === null ? selectOrder : order, genre, 1)
            .then((games) => {
                setGames(games.results);
            })
            .catch((err) => {
                console.error(err.response.data.errorMessage);
            })
            .finally(() => {
                setIsLoading(false);
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
                setIsLoading(false);
            });
        ;

    }, [search, order, genre, selectOrder]);

    return (
        <div className='w-full flex flex-col gap-5'>
            <Title title={title} subtitle={subtitle}></Title>
            <div className='flex gap-5 text-left'>
                <div>
                    <label htmlFor="orderby" className="block mb-2 text-sm font-medium text-white dark:text-white">Order by</label>
                    {selectOrder === '-added' && <SelectOrder orderby={selectOrder} handleOrder={handleOrder}></SelectOrder>}
                    {selectOrder === '-released' && <SelectOrder orderby={selectOrder} handleOrder={handleOrder}></SelectOrder>}
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
                <>
                    <GameList games={games} />
                    {isLoading && <Spinner></Spinner>}
                </>
            }
        </div>
    )
}

export default HomePage;