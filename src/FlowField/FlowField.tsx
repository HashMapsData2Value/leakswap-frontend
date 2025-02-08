import { useState } from "react";

import AlgoButton from "../Buttons/AlgoButton";
import XMRButton from "../Buttons/XMRButton";
import SwapButton from "../Buttons/SwapButton";
import './FlowField.css';
import returnLogo from '../../public/return-logo.svg';

function FlowField() {

  const [swapDirection, setSwapDirection] = useState(null as boolean | null);
  // True: Has Algo, Wants XMR
  // False: Has XMR, Wants Algo
  const [oneXMRinAlgo] = useState(769.82);
  const [spread] = useState(0.05);
  const [algoAmount, setAlgoAmount] = useState(0);
  const [xmrAmount, setXmrAmount] = useState(0);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      e.target.value = parseFloat(value).toString();
    }
  };

  return (
    <>
      <main className="main-content">
        {swapDirection == null && (
          <div>
            <h1 className="text">What do you want?</h1>
            <div className="button-container">
              <AlgoButton text="I Want Algo" onClick={() => setSwapDirection(false)} />
              <XMRButton text="I Want XMR" onClick={() => setSwapDirection(true)} />
            </div>
          </div>
          )}
          {swapDirection == true && (
            <div>
              <h1 className="text">
                How much <span className="algo-blue">Algo </span> do you have?
                <img src={returnLogo} alt="Return" className="return-icon" onClick={() => setSwapDirection(null)} />
              </h1>
              <input
                type="number"
                value={algoAmount}
                onBlur={handleBlur}
                onChange={(e) => setAlgoAmount(parseFloat(e.target.value))}
                className="custom-input algo-blue"
                min="0"
              />
              <h1 className="text">Our offer: 
                <span className="xmr-orange"> {(algoAmount / oneXMRinAlgo / (1+spread)).toFixed(12)} XMR</span>
              </h1>
              <br />
              <br />
              <br />
              <SwapButton text="SWAP" onClick={() => alert("Are you sure? Cancelling will result in a loss of funds.")} />
            </div>
          )}
          {swapDirection == false && (
            <div>
              <h1 className="text">
                How much <span className="xmr-orange">XMR</span> do you have?
                <img src={returnLogo} alt="Return" className="return-icon" onClick={() => setSwapDirection(null)} />
              </h1>
              <input
                type="number"
                value={xmrAmount}
                onBlur={handleBlur}
                onChange={(e) => setXmrAmount(parseFloat(e.target.value))}
                className="custom-input xmr-orange"
                min="0"
              />
              <h1 className="text">Our offer:
                <span className="algo-blue"> {(xmrAmount * oneXMRinAlgo / (1+spread)).toFixed(6)} Algo</span>
              </h1>
              <br />
              <br />
              <br />
              <SwapButton text="SWAP" onClick={() => alert("Are you sure? Cancelling will result in a loss of funds.")} />
            </div>
          )}
      </main>
    </>
    );
}


export default FlowField;