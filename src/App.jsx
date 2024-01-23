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
      <main className='w-full flex px-[40px]'>
        <DiscoverSidebar />
        <Routes>
          <Route path="/" element={<HomePage search={search} />} />
          <Route path="/game/:id" element={<GameDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;