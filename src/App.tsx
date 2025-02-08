import './App.css';
import leakswapLogo from '../public/swap-circle.svg';

function App() {
  return (
    <>
      <header className="header">
      <div className="logo-container">
          <h1 className="logo-text">LEAK.SWAP</h1>
          <img src={leakswapLogo} alt="LeakSwap Logo" className="logo-image" />
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#docs">Docs</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#github">Github</a></li>
          </ul>
        </nav>
      </header>
      <h1>hallo</h1>
    </>
  );
}

export default App;