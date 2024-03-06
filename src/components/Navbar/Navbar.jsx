import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

const Navbar = ({ filterGames }) => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <>
            <header className='relative flex items-center gap-5 bg-transparent z-10 py-[24px] px-[40px] max-md:px-[15px]'>
                <h1 className='text-2xl block font-bold text-white'><Link to="/">RAWG</Link></h1>
                <div className='relative w-full'>
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-4 h-4 text-gray-500">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z">
                            </path>
                        </svg>
                    </div>
                    <div className="absolute gap-1 inset-y-0 end-0 flex items-center pe-5 pointer-events-none text-sm text-gray-500 max-md:hidden">
                        <div className="border border-gray-500 px-1.5 py-0.5">
                            <code>alt</code>
                        </div>
                        <span>+</span>
                        <div className="border border-gray-500 px-1.5 py-0.5">
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
                <div className="flex text-white gap-5 items-center max-md:hidden whitespace-nowrap">
                    <Link className="text-sm font-semibold hover:underline hover:underline-offset-8" href="/rawg-angular/auth">LOG IN</Link>
                    <Link to="https://rawg.io/apidocs" target="_blank" className="text-sm font-semibold hover:underline hover:underline-offset-8">API</Link>

                    <div className='dotted-label'></div>
                </div>
                <button onClick={handleShowNavbar} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </header>
            <div className={`navbar-responsive-menu absolute bg-[#151515] mx-[10px] text-white z-10 transition duration-1500 rounded-[4px] ${showNavbar ? 'max-md:block' : 'max-md:hidden'} hidden`}>
                <div className='p-[5px]'>
                    <Link className="text-[16px] font-semibold hover:underline hover:underline-offset-8" href="/rawg-angular/auth">LOG IN</Link>
                </div>
                <div className='p-[5px]'>
                    <Link to="https://rawg.io/apidocs" target="_blank" className="text-[16px] font-semibold hover:underline hover:underline-offset-8">API</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;