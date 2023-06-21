import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { ImCart } from "react-icons/im";
import { Link } from 'react-router-dom';
import logo from "../../Assets/Images/favicon-babyfood.png";
import './Navbar.css';
import { SidebarData } from './SidebarData';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '' }}>
        <div className=' bg-[#060b26] '>
          <div className='lg:mx-[5rem] mx-[2rem]  h-20 flex items-center lg:justify-between'>
           <div className='flex lg:w-auto w-full justify-between items-center'>
             <div>
              <Link to='#' className='text-[2rem] lg:hidden text-white '>
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
             </div>
              <div className=''>
                <img className='w-12' src={logo} alt="" />
              </div>
              <div className='lg:hidden block text-white'>
                <ImCart></ImCart>
              </div>
           </div>
            <div className='lg:flex hidden gap-5'>
              {
              SidebarData.map((menu, i) => <div className='text-sm text-teal-500' key={i}>
                <Link>{menu.title}</Link>
                </div>)}
              <div className='relative flex items-center justify-end'>
                <FiSearch className='absolute right-2 text-lg text-black'></FiSearch>
                <input className='w-[350px] px-3 rounded-2xl border-none ring-2
                 ring-gray-300 focus:ring-teal-500 focus:ring-0' type="search" placeholder='Search Here'
                  name="" id="" />
                
              </div>
            </div>
            <div className='lg:flex gap-5 hidden text-white'>
              <FaRegHeart></FaRegHeart>
              <ImCart></ImCart>
            </div>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars text-white text-2xl absolute right-6 top-10 font-semibold'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <>
                  <div className="">
                    <li key={index} className=" text-white">
                  <Link className='flex items-center h-[60px] gap-2 ml-4' to={item.path}>
                    <div>{item.icon}</div>
                    <div>{item.title}</div>
                  </Link>
                </li>
                  </div>
                </>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      <div>
        <p>What is this</p>
      </div>
    </>
  );
}

export default Navbar;