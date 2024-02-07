import './GameDetail.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parse from "html-react-parser";
import GameSearchService from '../../services/GameSearch.service';

const GameDetail = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [game, setGame] = useState(null);
    const { id } = useParams();

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


    }, [id]);

    return (
        <>
            {
                (game !== null && !isLoading) &&
                <div className='w-full'>
                    <div className='container-image z-0' style={{
                        background: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)),url(${game.background_image})`
                    }}>
                    </div>
                    <div className='flex justify-center mt-[32px]'>
                        <div className='flex max-w-[960px]'>
                            <div className='text-left'>
                                <h1 className='text-white text-[72px] leading-[74px] font-[700] mb-[48px]'>
                                    {game.name}
                                </h1>
                                <div className='text-white text-left'>
                                    {parse(String(game.description))}
                                </div>
                            </div>
                            <div className='min-w-[384px] ml-[48px]'>
                                <img src={game.background_image} alt={game.name} />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default GameDetail;