import React from 'react';
import './CardContainer.css';
import { GoArrowUpRight } from "react-icons/go";

const CardContainer = () => {
  return (
    <>
    <div className="cards-container">
      <h1 className='card-head'>Trading Accounts</h1>
      
      <div className='cards-container-inner'>
        <h1 className='card-head-inner'>Master Account</h1>
        <div className='inner-one'>
          <p className='unactives'>CTrader</p>
          <p className='card-head-inner'>#273728</p>
        </div>
        <div className='inner-one' style={{justifyContent:'space-between'}}>
          <p className='bold-num'>0.00<span className='card-head-inner'>USD</span></p>
          <GoArrowUpRight style={{paddingTop:'10px', fontSize:'25px'}}/>
        </div>
      </div>

      <div className='cards-container-inner'>
        <h1 className='card-head-inner'>Master Account</h1>
        <div className='inner-one'>
          <p className='unactives'>CTrader</p> 
          <p className='card-head-inner' style={{paddingTop:'8px'}}>#273728</p>
        </div>
        <div className='inner-one' style={{justifyContent:'space-between'}}>
          <p className='bold-num'>0.00<span className='card-head-inner'>USD</span></p>
          <GoArrowUpRight style={{paddingTop:'10px', fontSize:'25px'}}/>
        </div>
      </div>
    </div>
    <div className='cards-container'>
    <div className='cards-container-btm'>
    <div className="card">
      <div className="card-header">
        <span className="pair">GBPUSD</span>
        <span  className='position long'>Long</span>
        <span className="details">0.12</span>
      </div>
      <div className='amount positive'>+56.00 USD</div>
    </div>
</div>
   <div className='cards-container-btm'>
    <div className="card">
      <div className="card-header">
        <span className="pair">GBPUSD</span>
        <span  className='position long'>Long</span>
        <span className="details">0.12</span>
      </div>
      <div className='amount negative'>+56.00 USD</div>
    </div>
</div>
   <div className='cards-container-btm'>
    <div className="card">
      <div className="card-header">
        <span className="pair">GBPUSD</span>
        <span className='position short'>Short</span>
        <span className="details">0.12</span>
      </div>
      <div className='amount negative'>+56.00 USD</div>
    </div>
    </div>
</div>
</>
  );
};

export default CardContainer;
