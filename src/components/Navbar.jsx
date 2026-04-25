import React from 'react';
import { IoTimeOutline } from 'react-icons/io5';
import { MdHome } from 'react-icons/md';
import { TfiStatsUp } from 'react-icons/tfi';
import {Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto my-5'>
            <div className="font-bold  ">
                Keen<span className='text-red-400'>Keeper</span>
            </div>
            
            <div className="flex justify-center items-center gap-1.5">
               <NavLink to={"/"} className={({isActive}) =>   ` p-1.5 flex items-center gap-1 rounded-[10px] ${isActive ? "bg-amber-300" : ""}`}>
               <MdHome /> Home
               </NavLink>
               <NavLink to={"/timeline"}  className={({isActive}) =>   `p-1.5 flex items-center gap-1 rounded-[10px] ${isActive ? "bg-amber-300" : ""}`}>
               <IoTimeOutline/> Timeline
               </NavLink>
               <NavLink to={"/stats"}  className={({isActive}) =>   `p-1.5 flex items-center gap-1 rounded-[10px] ${isActive ? "bg-amber-300" : ""}`}>
               <TfiStatsUp/> Stats
               </NavLink>
               
               
            </div>
        </div>
    );
};

export default Navbar;