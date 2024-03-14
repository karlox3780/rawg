import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import DiscoverSidebar from './components/DiscoverSidebar/DiscoverSidebar';
import GameDetail from './pages/GameDetail/GameDetail';
import { GAMES, GAMES_DATES, GAMES_DETAIL, GAMES_DEVELOPERS, GAMES_GENRES, GAMES_PUBLISHERS, GAMES_TAGS, HOME } from './config/router/paths';

function App() {
  const [search, setSearch] = useState('');
  const filterGames = (event) => {
    const { value } = event.target;
    setSearch(value);
  }

  return (
    <div className="App">
      <Navbar filterGames={filterGames} />
      <main className='w-full flex items-start px-[40px] pb-[100px] max-md:px-[15px] max-lg:pb-[40px]'>
        <DiscoverSidebar />
        <Routes>
          <Route path={HOME} element={<HomePage search={search} title="New and trending" subtitle="Based on player counts and release date" selectOrder="-released" />} />
          <Route path={GAMES} element={<HomePage search={search} title="All Games" selectOrder="-added" />} />
          <Route path={GAMES_PUBLISHERS} element={<HomePage search={search} selectOrder="-released" />} />
          <Route path={GAMES_DEVELOPERS} element={<HomePage search={search} selectOrder="-released" />} />
          <Route path={GAMES_TAGS} element={<HomePage search={search} selectOrder="-released" />} />
          <Route path={GAMES_GENRES} element={<HomePage search={search} selectOrder="-released" />} />
          <Route path={GAMES_DATES} element={<HomePage search={search} selectOrder="-released" />} />
          <Route path={GAMES_DETAIL} element={<GameDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;