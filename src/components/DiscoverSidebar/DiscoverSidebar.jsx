import { Link } from 'react-router-dom';
import './DiscoverSidebar.css';

const DiscoverSidebar = () => {
    return (
        <nav className='text-white text-left w-[200px] mr-[20px] mt-[40px]'>
            <ul>
                <li>
                    <Link to="/games">Games</Link>
                </li>
                <li>
                    <Link to="/platforms">Platforms</Link>
                </li>
                <li>
                    <Link to="/stores">Stores</Link>
                </li>
                <li>
                    <Link to="/developers">Developers</Link>
                </li>
                <li>
                    <Link to="/publishers">Publishers</Link>
                </li>
            </ul>
        </nav>
    )
}

export default DiscoverSidebar;