import React from 'react';
import { IoTimeOutline } from 'react-icons/io5';
import { MdHome } from 'react-icons/md';
import { TfiStatsUp } from 'react-icons/tfi';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto'>
            <div className="font-bold  ">
                Keen<span className='text-red-400'>Keeper</span>
            </div>
            <div className="flex justify-center items-center gap-1.5">
               <div className="flex items-center gap-1">
               <MdHome /> Home
               </div>
               <div className="flex items-center gap-1">
                <IoTimeOutline /> Timeline</div>
               <div className="flex items-center gap-1">
               <TfiStatsUp /> Stats </div>
            </div>
        </div>
    );
};

export default Navbar;