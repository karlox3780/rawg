import { Link } from 'react-router-dom';
import './DiscoverSidebar.css';

const DiscoverSidebar = () => {
    return (
        <nav className='sticky top-0 text-white text-left py-5 z-0 w-[200px] mr-[20px]'>
            <ul className='flex flex-col gap-5'>
                <li className='flex flex-col gap-3 text-2xl font-bold'>
                    <Link className="text-2xl block font-bold hover:text-[#636363] transition-colors" to="/">Home</Link>
                </li>
                <li className='flex flex-col gap-3 text-2xl font-bold'>
                    <Link className="text-2xl block font-bold hover:text-[#636363] transition-colors" to="/platforms">Reviews</Link>
                </li>
                <li className='flex flex-col gap-3 text-2xl font-bold'>
                    <Link className="text-2xl block font-bold hover:text-[#636363] transition-colors" to="/stores">New Releases</Link>
                    <ul className='flex flex-col gap-2'>
                        <li>
                            <Link className='text-lg font-normal flex items-center gap-2 group'>
                                <span className='p-2 bg-[#202020] text-white rounded-xl group-hover:bg-white group-hover:text-[#202020] transition-colors duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" strokeWidth="0" fill="currentColor"></path></svg>
                                </span>
                                <span className='text-base'>Last 30 days</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='text-lg font-normal flex items-center gap-2 group'>
                                <span className='p-2 bg-[#202020] text-white rounded-xl group-hover:bg-white group-hover:text-[#202020] transition-colors duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z"></path></svg>
                                </span>
                                <span className='text-base'>This week</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='text-lg font-normal flex items-center gap-2 group'>
                                <span className='p-2 bg-[#202020] text-white rounded-xl group-hover:bg-white group-hover:text-[#202020] transition-colors duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" strokeWidth="0" fill="currentColor"></path><path d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" strokeWidth="0" fill="currentColor"></path></svg>
                                </span>
                                <span className='text-base'>Next week</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className='flex flex-col gap-3 text-2xl font-bold'>
                    <Link className="text-2xl block font-bold hover:text-[#636363] transition-colors" to="/developers">Top</Link>
                    <ul className='flex flex-col gap-2'>
                        <li>
                            <Link className='text-lg font-normal flex items-center gap-2 group'>
                                <span className='p-2 bg-[#202020] text-white rounded-xl group-hover:bg-white group-hover:text-[#202020] transition-colors duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"></path><path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889"></path><path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889"></path></svg>
                                </span>
                                <span className='text-base'>Best of the year</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='text-lg font-normal flex items-center gap-2 group'>
                                <span className='p-2 bg-[#202020] text-white rounded-xl group-hover:bg-white group-hover:text-[#202020] transition-colors duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M4 20l14 0"></path></svg>
                                </span>
                                <span className='text-base'>Popular in 2023</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='text-lg font-normal flex items-center gap-2 group'>
                                <span className='p-2 bg-[#202020] text-white rounded-xl group-hover:bg-white group-hover:text-[#202020] transition-colors duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z"></path></svg>
                                </span>
                                <span className='text-base'>All time top 250</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className='flex flex-col gap-3 text-2xl font-bold'>
                    <Link className="text-2xl block font-bold hover:text-[#636363] transition-colors" to="/publishers">All Games</Link>
                </li>
                <li className='flex flex-col gap-3 text-2xl font-bold'>
                    <Link className="text-2xl block font-bold hover:text-[#636363] transition-colors" to="/publishers">Genres</Link>
                    <ul className='flex flex-col gap-2'>
                        <li>
                            <Link className='text-lg font-normal flex items-center gap-2 group'>
                                <span className='p-2 bg-[#202020] text-white rounded-xl group-hover:bg-white group-hover:text-[#202020] transition-colors duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4v5l-9 7l-4 4l-3 -3l4 -4l7 -9z"></path><path d="M6.5 11.5l6 6"></path></svg>
                                </span>
                                <span className='text-base'>Action</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='text-lg font-normal flex items-center gap-2 group'>
                                <span className='p-2 bg-[#202020] text-white rounded-xl group-hover:bg-white group-hover:text-[#202020] transition-colors duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4v5l-9 7l-4 4l-3 -3l4 -4l7 -9z"></path><path d="M6.5 11.5l6 6"></path></svg>
                                </span>
                                <span className='text-base'>Indie</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='text-lg font-normal flex items-center gap-2 group'>
                                <span className='p-2 bg-[#202020] text-white rounded-xl group-hover:bg-white group-hover:text-[#202020] transition-colors duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4v5l-9 7l-4 4l-3 -3l4 -4l7 -9z"></path><path d="M6.5 11.5l6 6"></path></svg>
                                </span>
                                <span className='text-base'>Adventure</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='text-lg font-normal flex items-center gap-2 group'>
                                <span className='p-2 bg-[#202020] text-white rounded-xl group-hover:bg-white group-hover:text-[#202020] transition-colors duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4v5l-9 7l-4 4l-3 -3l4 -4l7 -9z"></path><path d="M6.5 11.5l6 6"></path></svg>
                                </span>
                                <span className='text-base'>RPG</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='text-lg font-normal flex items-center gap-2 group'>
                                <span className='p-2 bg-[#202020] text-white rounded-xl group-hover:bg-white group-hover:text-[#202020] transition-colors duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4v5l-9 7l-4 4l-3 -3l4 -4l7 -9z"></path><path d="M6.5 11.5l6 6"></path></svg>
                                </span>
                                <span className='text-base'>Strategy</span>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default DiscoverSidebar;