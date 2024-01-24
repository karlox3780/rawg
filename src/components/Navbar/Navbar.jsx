import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ filterGames }) => {
    return (
        <header className='relative flex items-center gap-5 bg-transparent z-10 py-[24px] px-[40px]'>
            <h1 className='text-2xl block font-bold text-white'><Link to="/">RAWG</Link></h1>
            <div className='relative w-full'>
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-4 h-4 text-gray-500">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z">
                        </path>
                    </svg>
                </div>
                <div class="absolute gap-1 inset-y-0 end-0 flex items-center pe-5 pointer-events-none text-sm text-gray-500">
                    <div class="border border-gray-500 px-1.5 py-0.5">
                        <code>alt</code>
                    </div>
                    <span>+</span>
                    <div class="border border-gray-500 px-1.5 py-0.5">
                        <code>enter</code>
                    </div>
                </div>
                <input
                    type='text'
                    placeholder="Search ..."
                    className='bg-[hsla(0,0%,100%,.16)] block w-full text-white rounded-full p-3 ps-10 transition-colors duration-1000 hover:bg-[#fff] focus:outline-0 hover:text-[rgba(0,0,0,.6)]'
                    onChange={filterGames}
                ></input>
            </div>
            <div className='dotted-label'></div>
        </header>
    )
}

export default Navbar;