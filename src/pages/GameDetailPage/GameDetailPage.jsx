import './GameDetailPage.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GameDetail from '../../components/GameDetail/GameDetail';
import GameSearchService from '../../services/GameSearch.service';
import moment from 'moment';
import Spinner from '../../components/Spinner/Spinner';

const GameDetailPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [game, setGame] = useState(null);
    const [screenshots, setScreenshots] = useState([]);
    const { id } = useParams();
    const formattedDate = moment(game?.released).format('MMM D, YYYY');
    const platforms = game?.parent_platforms;
    const platformsReq = game?.platforms;
    const genres = game?.genres;

    useEffect(() => {
        setIsLoading(true);
        GameSearchService.getGamebyId(id)
            .then((game) => {
                setGame(game);
            })
            .catch((err) => {
                console.error(err.response.data.errorMessage);
            })
            .finally(() => {
                setIsLoading(false);
            });

        GameSearchService.getGameScreenshots(id)
            .then((images) => {
                setScreenshots(images.results);
            })
            .catch((err) => {
                console.error(err.response.data.errorMessage);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [id]);

    return (
        <>
            {
                (game !== null && !isLoading) ?
                    <GameDetail game={game} genres={genres} platforms={platforms} platformsReq={platformsReq} formattedDate={formattedDate} screenshots={screenshots} />
                    :
                    <Spinner />
            }
        </>
    )
}

export default GameDetailPage;