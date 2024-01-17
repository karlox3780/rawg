import './Navbar.css';

const Navbar = () => {
    const filterGames = (event) => {
        const { value } = event.target;
    }

    return (
        <header className='w-full flex gap-5 py-[24px] px-[40px]'>
            <h1 className='text-3xl text-white'>RAWG</h1>
            <input
                type='text'
                placeholder="Search ..."
                className='bg-gray-800 text-white rounded-full px-4 py-2'
                onChange={filterGames}
            ></input>
        </header>
    )
}

export default Navbar;