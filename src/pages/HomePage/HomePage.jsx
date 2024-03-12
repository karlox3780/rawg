import './HomePage.css';
import { useState, useEffect } from 'react';
import GameSearch from '../../services/GameSearch.service';
import GenresService from '../../services/Genres.service';
import GameList from '../../components/GameList/GameList';
import Spinner from '../../components/Spinner/Spinner';
import Title from '../../components/Title/Title';
import SelectOrder from '../../components/SelectOrder/SelectOrder';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const HomePage = ({ search, title, subtitle, selectOrder }) => {
    const { genreParam, dateParam, tagParam, devParam, pubParam } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [titleState, setTitleState] = useState(null);
    const [games, setGames] = useState([]);
    const [order, setOrder] = useState(null);
    const [genre, setGenre] = useState(null);
    const [genres, setGenres] = useState(null);
    const [page, setPage] = useState(2);

    const dateCalc = (operation, days) => {
        var fecha = new Date();
        var otraFecha = new Date();
        var startOfWeek = moment(moment().startOf('isoweek').toDate()).format('YYYY-MM-DD');;
        var endOfWeek = moment(moment().endOf('isoweek').toDate()).format('YYYY-MM-DD');

        if (operation === "last-30-days") {
            otraFecha = otraFecha.setDate(fecha.getDate() - days);
            return moment(otraFecha).format('YYYY-MM-DD') + ',' + moment(fecha).format('YYYY-MM-DD')
        }
        else if (operation === "this-week") {
            otraFecha = otraFecha.setDate(fecha.getDate() + days);
            return startOfWeek + ',' + endOfWeek
        }
        else if (operation === "next-week") {
            otraFecha = otraFecha.setDate(fecha.getDate() + (days * 2));
            fecha = fecha.setDate(fecha.getDate() + days);
            return moment(fecha).format('YYYY-MM-DD') + ',' + moment(otraFecha).format('YYYY-MM-DD')
        }
    }

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
                .getSearchGames(search, order === null ? selectOrder : order, genre, page, dateParam ? dateCalc(dateParam, dateParam === "last-30-days" ? 30 : 7) : '', tagParam, devParam, pubParam)
                .then((res) => {
                    setGames((prevItems) => [...prevItems, ...res.results]);
                })
                .catch((err) => console.log(err))
                .finally(() => {
                    setIsLoading(false);
                });

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
    }, [isLoading, search, order, genre, selectOrder, page, dateParam, tagParam, devParam, pubParam]);

    useEffect(() => {
        let isActive = true;
        setIsLoading(true);
        if (!genreParam && genre === null) setGenre(null);
        if (genreParam) {
            if (genreParam === "role-playing-games-rpg") {
                setTitleState("RPG");
                setGenre(genreParam);
            } else {
                setTitleState(genreParam);
                setGenre(genreParam);
            }
        } else if (dateParam) {
            switch (dateParam) {
                case "last-30-days":
                    setTitleState("Last 30 Days");
                    break;
                case "this-week":
                    setTitleState("This week");
                    break;
                case "next-week":
                    setTitleState("Next week");
                    break;
                default:
                    break;
            }
        } else if (tagParam || devParam || pubParam) {
            setTitleState(tagParam ? tagParam.replaceAll("-", " ") : (devParam ? devParam.replaceAll("-", " ") : pubParam.replaceAll("-", " ")));
        } else {
            setTitleState(title);
        }
        GameSearch
            .getSearchGames(search, order === null ? selectOrder : order, genre, 1, dateParam ? dateCalc(dateParam, dateParam === "last-30-days" ? 30 : 7) : '', tagParam, devParam, pubParam)
            .then((games) => {
                if (isActive) setGames(games.results);
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
                if (isActive) setGenres(genres.results)
            })
            .catch((err) => {
                console.error(err.response.data.errorMessage);
            })
            .finally(() => {
                setIsLoading(false);
            });
        return () => {
            isActive = false;
        }
    }, [search, order, genre, selectOrder, title, titleState, genreParam, dateParam, tagParam, devParam, pubParam]);

    return (
        <div className='w-full flex flex-col gap-5'>
            <Title title={titleState} subtitle={subtitle}></Title>
            {
                !genreParam && <div className='flex gap-5 text-left'>
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
            }
            {
                <>
                    {games.length && <GameList games={games} />}
                    {isLoading && <Spinner></Spinner>}
                </>
            }
        </div>
    )
}

export default HomePage;