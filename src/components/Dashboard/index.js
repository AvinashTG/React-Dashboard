import React from 'react';
import './Dashboard.css';
import CardContainer from '../CardContainer/index'
import ChartExample from '../Charts/index'
import { GoArrowDownLeft } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { BsPersonCheck } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { BiTransfer } from "react-icons/bi";
import { GoHistory } from "react-icons/go";
import { MdOutlinePerson4 } from "react-icons/md";
import { RiExchangeBoxFill } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import { MdFileDownload } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className='container'>
        <h1>Dashboard</h1>
        <div>
        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '4px', padding: '0 8px' }}>
      <FiSearch style={{ marginRight: '8px' }} />
      <input
        type="text"
        placeholder="Search..."
        style={{ border: 'none', outline: 'none', flex: '1' }}
      /> 
    </div></div>
      </div>

      <div className='divided-container'>
      <div className='center-container'>
      <div class="cards-container">
      <h1 className='card-head'>Quick Lines</h1>
      <div className='cards'>
      <div className='card'>
      <GoArrowDownLeft className='icon'/>
      <p className='para-card'>Deposit</p>
      </div>
      <div className='card'>
      <FiArrowUpRight className='icon'/>
      <p className='para-card'>Withdraw</p>
      </div>
      <div className='card'>
      <CiSettings className='icon'/>
      <p className='para-card'>Settings</p>
      </div>
      <div className='card'>
      <BsPersonCheck className='icon'/>
      <p className='para-card'>Verification</p>
      </div>
      <div className='card'>
      <FaRegStar className='icon'/>
      <p className='para-card'>Bonuses</p>
      </div>
      <div className='card'>
      <FaChartLine className='icon'/>
      <p className='para-card'>MTS</p>
      </div>
      <div className='card'>
      <BiTransfer className='icon'/>
      <p className='para-card'>Transfer</p>
      </div>
      <div className='card'>
      <GoHistory className='icon'/>
      <p className='para-card'>History</p>
      </div>
      <div className='card'>
      <MdOutlinePerson4 className='icon'/>
      <p className='para-card'>Partner</p>
      </div>
      <div className='card'>
      <RiExchangeBoxFill className='icon'/>
      <p className='para-card'>Exchange</p>
      </div>
      <div className='card'>
      <SiSimpleanalytics className='icon'/>
      <p className='para-card'>Analytics</p>
      </div>
      </div>
      
      </div>
      <div className='cards-container'>
      <div className="divided-container" style={{justifyContent:'space-between'}}>
      <h1 className='card-head'>Overview</h1>
      <p className='para-graph'><MdFileDownload style={{paddingRight:'5px',fontSize:'15px'}}/>Download Report</p>
      </div>
      <div className="divided-container">
      <button className='unactive'>Monthly</button>
      <button className='active'>Yearly</button>
      </div>
      <ChartExample/>
      </div>
      </div>
      

      <div className='side-container'>
        <CardContainer/>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;