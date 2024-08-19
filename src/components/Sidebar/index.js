import React from 'react';
import './Sidebar.css';
import Images from '../Images/Logo.png'
import { GoPerson } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiNotification3Line } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { FaHeadphones } from "react-icons/fa6";
import { MdHistory } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { SlWallet } from "react-icons/sl";
import { PiArrowsLeftRightBold } from "react-icons/pi";
import { RiBox3Line } from "react-icons/ri";
import { AiFillPieChart } from "react-icons/ai";
import { BiVector } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Images} alt='Logo'/>
      </div>
      <ul className="menu-items">
        <li><LuLayoutDashboard className='icon-nav'/>Dashboard</li>
        <li><BiVector className='icon-nav'/>CRM</li>
        <li><RiBox3Line className='icon-nav'/>MAM</li>
        <li><AiFillPieChart className='icon-nav' />PAMM</li>
        <li><PiArrowsLeftRightBold className='icon-nav' />Trade</li>
        <li><SlWallet className='icon-nav'/>Wallet</li>
        <li> <RiMoneyDollarBoxLine className='icon-nav'/>Accounts</li>
        <li><MdHistory className='icon-nav'/>History</li>
      </ul>
      <div className="bottom-menu">
        <ul>
          <li><RiNotification3Line  className='icon-nav'/>Notification</li>
          <li><CiSettings  className='icon-nav'/>Settings</li>
          <li><FaHeadphones  className='icon-nav'/>Help & Support</li>
          <li><RiLogoutBoxLine  className='icon-nav'/>Logout</li>
          <hr/>
          <div className='mailcontainer'>
          <GoPerson className='bg-person'/>
          <div>
          <h1 className="head-side">Shyam Shakur</h1>
          <p className="para-side">shyam01.Shakur@mail...</p>
          </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
