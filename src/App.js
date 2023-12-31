import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { useEffect } from 'react';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
