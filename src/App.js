import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Signup from './pages/Signup';
import NavBar from './components/NavBar';
import useDocumentTitle from './hooks/useDocumentTitle';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  // Set the website title
  useDocumentTitle("HabisLiao | From Delay to A's: HabisLiao Way!");

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar /> {/*Include the NavBar component */}
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} /> {/* Include the Contact component */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
