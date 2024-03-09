import { Link } from 'react-router-dom';
import './GameCard.css';

const GameCard = ({ game }) => {
    const genres = game.genres;
    const platforms = game.parent_platforms;
    return (
        <div className='relative mb-3'>
            <div className='flex flex-col w-full z-0 group gap-2 rounded-lg shadow-lg lg:hover:scale-110 lg:hover:absolute lg:hover:top-0 lg:hover:left-0 lg:hover:z-10 transition-transform duration-300 bg-[#202020] text-white' >
                <img className="w-full h-[200px] object-cover max-w-full rounded-md"
                    src={game.background_image}
                    alt={game.name} />
                <div className='p-3 flex flex-col pb-[24px] text-left'>
                    <div className="game-card-medium__meta">
                        <div className="platforms platforms_medium game-card-medium__platforms">
                            {
                                platforms?.length > 0 && platforms.map(platform =>
                                    <div key={platform.platform.id} className={`platforms__platform platforms__platform_medium platforms__platform_${platform.platform.slug}`}></div>
                                )
                            }
                        </div>
                    </div>
                    <Link to={`/games/` + game.id} >
                        <span className='text-3xl font-semibold text-balance'>{game.name}</span>
                    </Link>
                    <div className='flex-col gap-3 flex pt-[12px] lg:hidden lg:group-hover:flex'>
                        <div className='flex justify-between'>
                            <span className='text-xs font-bold text-[#636363]'>Release Date:</span>
                            <span className='text-xs text-white'>{game.released}</span>
                        </div>
                        <hr className="border-[#636363]"></hr>
                        <div className='flex justify-between'>
                            <span className='text-xs font-bold text-[#636363] pr-[5px]'>Genres:</span>
                            <div className='text-xs text-white flex flex-row flex-wrap gap-2'>
                                {
                                    genres?.length > 0 && genres.map(genre =>
                                        <Link to={`/games/genres/` + genre.slug}><span key={genre.id}>{genre.name}</span></Link>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameCard;