import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import DiscoverSidebar from './components/DiscoverSidebar/DiscoverSidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className='w-full flex sticky top-0 px-[40px]'>
        <DiscoverSidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;