import './App.css';
import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './layout/navbar.component';

// Page Components
import Home from './pages/home/home.component';
import About from './pages/about/about.component';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
