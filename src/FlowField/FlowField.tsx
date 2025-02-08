import { useState } from "react";

import Button from "../Buttons/Button";
import SwapButton from "../Buttons/SwapButton";
import './FlowField.css';

function FlowField() {

  const [swapDirection, setSwapDirection] = useState(null as boolean | null);
  // True: Has Algo, Wants XMR
  // False: Has XMR, Wants Algo
  const [oneXMRinAlgo] = useState(769.82);
  const [spread] = useState(0.05);
  const [algoAmount, setAlgoAmount] = useState(0);
  const [xmrAmount, setXmrAmount] = useState(0);

  return (
    <>
      <main className="main-content">
        {swapDirection == null && (
          <div>
            <h1 className="text">What do you want?</h1>
            <div className="button-container">
              <Button text="I Want Algo" onClick={() => setSwapDirection(false)} />
              <Button text="I Want XMR" onClick={() => setSwapDirection(true)} />
            </div>
          </div>
          )}
          {swapDirection == true && (
            <div>
              <h1 className="text">How much <span className="algo-blue">Algo</span> do you have?</h1>
              <input
                type="number"
                value={algoAmount}
                onChange={(e) => setAlgoAmount(parseFloat(e.target.value))}
                className="custom-input"
                min="0"
              />
              <h1 className="text">Our offer: 
                <span className="red"> {(algoAmount / oneXMRinAlgo / (1+spread)).toFixed(12)}</span> 
                <span className="xmr-orange"> XMR</span>
              </h1>
              <br />
              <br />
              <br />
              <SwapButton text="SWAP" onClick={() => alert("Are you sure? Cancelling will result in a loss of funds.")} />
            </div>
          )}
          {swapDirection == false && (
            <div>
              <h1 className="text">How much <span className="xmr-orange">XMR</span> do you have?</h1>
              <input
                type="number"
                value={xmrAmount}
                onChange={(e) => setXmrAmount(parseFloat(e.target.value))}
                className="custom-input"
                min="0"
              />
              <h1 className="text">Our offer:
                <span className="red"> {(xmrAmount * oneXMRinAlgo / (1+spread)).toFixed(6)}</span>
                <span className="algo-blue"> Algo</span>
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