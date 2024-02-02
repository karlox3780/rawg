import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import DiscoverSidebar from './components/DiscoverSidebar/DiscoverSidebar';
import GameDetail from './pages/GameDetail/GameDetail';

function App() {
  const [search, setSearch] = useState('');
  const filterGames = (event) => {
    const { value } = event.target;
    setSearch(value);
  }

  return (
    <div className="App">
      <Navbar filterGames={filterGames} />
      <main className='w-full flex items-start px-[40px]'>
        <DiscoverSidebar />
        <Routes>
          <Route path="/" element={<HomePage search={search} title="New and trending" subtitle="Based on player counts and release date" selectOrder="-released" />} />
          <Route path="/games" element={<HomePage search={search} title="All Games" selectOrder="-added" />} />
          <Route path="/game/:id" element={<GameDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;