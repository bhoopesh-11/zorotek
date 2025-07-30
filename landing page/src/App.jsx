import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="background">
      <div className="brand-container desktop-only">
        <div className="logo-placeholder">
          <img
            src="/logo_zorotek_nobg.png"
            alt="Zorotek Logo"
            className="brand-logo-img"
          />
        </div>

        <div className="brand-text">
          <span className="zoro">ZORO</span>
          <span className="tek">TEK</span>
        </div>
      </div>
      <Home />
      <Navbar />
    </div>
  );
}

export default App;
