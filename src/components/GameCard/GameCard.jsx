import './GameCard.css';

const GameCard = ({ game }) => {
    return (
        <div className='text-white'>
            <img className="h-auto max-w-full rounded-lg" src={game.background_image} alt="" />
            <span>{game.name}</span>
        </div>
    )
}

export default GameCard;