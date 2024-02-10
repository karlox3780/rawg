import './GameDetail.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parse from "html-react-parser";
import GameSearchService from '../../services/GameSearch.service';
import moment from 'moment';

const GameDetail = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [game, setGame] = useState(null);
    const [screenshots, setScreenshots] = useState([]);
    const { id } = useParams();
    const formattedDate = moment(game?.released).format('MMM D, YYYY').toUpperCase()
    const platforms = game?.parent_platforms;

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
                (game !== null && !isLoading) &&
                <div className='w-full'>
                    <div className='container-image z-0' style={{
                        background: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)),url(${game.background_image})`
                    }}>
                    </div>
                    <div className='flex justify-center mt-[32px]'>
                        <div className='flex max-w-[960px]'>
                            <div className='text-left'>
                                <div className='flex items-center mb-[12px]'>
                                    <span className='text-[14px] py-[2px] px-[8px] text-[#000] bg-[#fff] rounded-[4px] mr-[10px]'>{formattedDate}</span>
                                    {
                                        platforms?.length > 0 && platforms.map(platform =>
                                            <div key={platform.platform.id} className={`platforms__platform platforms__platform_medium platforms__platform_${platform.platform.slug}`}></div>
                                        )
                                    }
                                    <div className='text-white'>{`AVERAGE PLAYTIME: ${game.playtime} HOURS`}</div>
                                </div>
                                <h1 className='text-white text-[72px] leading-[74px] font-[700] mb-[48px]'>
                                    {game.name}
                                </h1>
                                <div className='text-white text-left'>
                                    <h2 className='text-[24px] text-white font-bold mb-[8px]'>About</h2>
                                    {parse(String(game.description))}
                                </div>
                                <div className='flex mt-[32px]'>
                                    <div className='w-[50%]'>
                                        <div className='text-[hsla(0,0%,100%,.2)] mb-[8px]'>Platforms</div>
                                        {
                                            platforms?.length > 0 && platforms.map(platform =>
                                                <span key={platform.platform.id} className='platforms text-white'>{platform.platform.name}<span>&nbsp;,</span></span>
                                            )
                                        }
                                    </div>
                                    <div className='w-[50%]'>
                                        {
                                            game.metacritic !== null && <><div className='text-[hsla(0,0%,100%,.2)] mb-[8px]'>Metascore</div>
                                                <div className='text-[#6dc849] border border-[rgba(109,200,73,.4)] w-[32px] rounded-[4px] p-[4px] text-center font-bold'>
                                                    {game.metacritic}
                                                </div>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='gallery-screenshots min-w-[384px] w-[384px] ml-[48px] flex flex-wrap content-start gap-[12px]'>
                                {
                                    platforms?.length > 0 && screenshots.map(screenshot =>
                                        <img key={screenshot.id} className='rounded-[4px]' src={screenshot.image} alt={game.name} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default GameDetail;