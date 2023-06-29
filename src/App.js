import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Events from './components/Events';
import PresentTeam from './components/PresentTeam';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <div className="">
      <div className="max-w-[1600px] items-center justify-between mx-auto">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<PresentTeam />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
