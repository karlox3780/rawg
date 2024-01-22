import './GameDetail.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parse from "html-react-parser";
import GameSearchService from '../../services/GameSearch.service';

const GameDetail = () => {
    const [game, setGame] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        GameSearchService.getGamebyId(id)
            .then((game) => {
                setGame(game);
            })
    }, [id]);

    return (
        <>
            {
                game &&
                <div className='w-full'>
                    <div className='container-image z-0' style={{
                        background: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)),url(${game.background_image})`
                    }}>
                    </div>
                    <h1 className='text-white'>
                        {game.name}
                    </h1>
                    <div className='text-white text-left'>
                        {parse(String(game.description))}
                    </div>
                </div>
            }
        </>
    )
}

export default GameDetail;