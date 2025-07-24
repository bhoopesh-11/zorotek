import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="background">
      <div className="brand-container desktop-only">
        <div className="logo-placeholder">
          <svg width="40" height="40" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="20" fill="currentColor"/>
          </svg>
        </div>
        <div className="brand-text">
          <span className="zoro">ZORO</span>
          <span className="tek">TEK</span>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
