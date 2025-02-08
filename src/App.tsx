import './App.css';
import leakswapLogo from '../public/swap-circle.svg';
import Button from './Button';

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
      <main className="main-content">
        <h1 className="question">What do you want?</h1>
        <div className="button-container">
          <Button text="I Want Algo" onClick={() => alert('Button clicked!')} />
          <Button text="I Want XMR" onClick={() => alert('Button clicked!')} />
        </div>
      </main>
    </>
  );
}

export default App;