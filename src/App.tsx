import './style.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home/Home';
import Destination from './pages/Destination/Destination';
import Crew from './pages/Crew/Crew';
import Technology from './pages/Technology/Technology';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
