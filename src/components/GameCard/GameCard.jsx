import { Link } from 'react-router-dom';
import './GameCard.css';

const GameCard = ({ game }) => {
    const genres = game.genres;
    return (
        <div className='relative mb-3'>
            <div className='flex flex-col w-full z-0 group gap-2 rounded-lg shadow-lg lg:hover:scale-110 lg:hover:absolute lg:hover:top-0 lg:hover:left-0 lg:hover:z-10 transition-transform duration-300 bg-[#202020] text-white' >
                <img className="w-full h-[200px] object-cover max-w-full rounded-md"
                    src={game.background_image}
                    alt={game.name} />
                <div className='p-3 flex flex-col gap-5 text-left'>
                    <Link to={`/game/` + game.id} >
                        <span className='text-3xl font-semibold text-balance'>{game.name}</span>
                    </Link>
                    <div className='flex-col gap-3 flex lg:hidden lg:group-hover:flex'>
                        <div className='flex justify-between'>
                            <span>Release Date:</span>
                            <span className=''>{game.released}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Genres:</span>
                            <div className='flex gap-2'>
                                {
                                    genres.length > 0 && genres.map(genre =>
                                        <span key={genre.id}>{genre.name}</span>
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