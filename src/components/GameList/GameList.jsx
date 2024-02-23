import GameCard from '../GameCard/GameCard';
import './GameList'

const GameList = ({ games }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {
                games?.length > 0 && games.map((game) => <GameCard key={game.id} game={game} />)
            }
        </div>
    )
}

export default GameList;