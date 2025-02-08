import './App.css';
import leakswapLogo from '../../public/swap-circle.svg';
import FlowField from '../FlowField/FlowField';

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
            <li className="dropdown">
              <a href="" className="dropbtn">Community</a>
              <div className="dropdown-content">
                <a href="https://edaga.io">Edaga.io</a>
                <a href="https://bsky.app/profile/hashmapsdata2value.bsky.social">Bluesky</a>
                <a href="https://x.com/HMD2V">Twitter</a>
              </div>
            </li>
            <li><a href="https://github.com/HashMapsData2Value/LeakSwap">Github</a></li>
          </ul>
        </nav>
      </header>
      <FlowField/>
    </>
  );
}

export default App;