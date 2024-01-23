import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ filterGames }) => {
    return (
        <header className='relative flex items-center gap-5 bg-transparent z-10 py-[24px] px-[40px]'>
            <h1 className='text-3xl block font-bold text-white'><Link to="/">RAWG</Link></h1>
            <input
                type='text'
                placeholder="Search ..."
                className='bg-[hsla(0,0%,100%,.16)] flex-1 text-white rounded-full px-4 py-2 transition-colors duration-1000 hover:bg-[#fff] focus:outline-0 hover:text-[rgba(0,0,0,.6)]'
                onChange={filterGames}
            ></input>
            <div className='dotted-label'></div>
        </header>
    )
}

export default Navbar;