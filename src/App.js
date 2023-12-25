import './App.css';
import AboutUs from './components/AboutUs'; // Import the AboutUs component
import NavBar from './components/NavBar/NavBar';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div className="App">
      <header>
        <h1>HabisLiao Solutions</h1>
      </header>
      <main>
        <NavBar /> {/* Include the NavBar component */}
        <AboutUs /> {/* Include the AboutUs component */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </main>
      <footer>
        <p>&copy; 2023 HabisLiao Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
