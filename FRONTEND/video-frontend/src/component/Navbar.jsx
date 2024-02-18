// import React from 'react'
// import hamburger from "../assets/hamburger.png"
// export const Navbar = () => {
//   return (
//     <div className='flex justify-between items-center p-2 bg-white'>
//       <div className='flex gap-2'>
//         <button className='bg-black'>
//        <img src={hamburger} alt="" />
//        </button>
    
//         <div className='logo text-2xl font-semibold'>
//           <h1>Play videoTweet</h1>
//         </div>
      
//       </div>
//       <div className=' border-black border-2 rounded-lg p-1'>
       
//         <input type="search"  className='bg-gray-400 p-2 w-[300px] rounded-md ' placeholder='search'/>
//         <button className='p-2'>search</button>
//       </div>
//       <div className='w-[50px] h-[50px] bg-[#201c1c] rounded-full'>
//         <img src="" alt="" />
//       </div>
//     </div>
//   )
// }

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import vite from "/vite.svg"
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const menuItems = [
    { icon: <TbTruckDelivery size={25} className="mr-4" />, text: "Home" ,link:"/"},
    { icon: <MdFavorite size={25} className="mr-4" />, text: "Tweet",link:"/tweet" },
    { icon: <FaWallet size={25} className="mr-4" />, text: "History",link:"/history"},
    { icon: <MdHelp size={25} className="mr-4" />, text: "Register",link:"/register" },
  ];

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow-sm">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
      <Link to={'/'}> <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          play <span className="font-bold">VideoTweet</span>
        </h1></Link> 
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">video</p>
          <p className="p-2">write</p>
        </div>
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search videos"
        />
      </div>
      {/* Profile button */}
      <Link to={'/profile'} className="bg-black text-white hidden md:flex justify-center items-center w-[50px] h-[50px] rounded-full border  border-black  ">
       <img src={vite} alt="" />
      </Link>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Video <span className="font-bold">Tweet</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            {menuItems.map(({ icon, text,link }, index) => {
              return (
                <div key={index} className=" py-4">
                 <Link to={link} className="text-xl flex cursor-pointer  w-[50%] rounded-full mx-auto p-2 hover:text-white hover:bg-black">
                    {icon} {text}
                  </Link>
                
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
