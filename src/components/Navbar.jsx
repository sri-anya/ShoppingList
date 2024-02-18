import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div>
      <nav className='bg-[#000000] text-white flex justify-between p-4 items-center'>
        <div className="logo">
          <span className='font-bold text-xl mx-8'><img width="80" src="/logo-no-background.svg" alt="" /></span>
          </div>
        <div className='cursor-pointer hover:font-bold transition-all '>About</div>
      </nav>
    </div>
  );
};

export default Navbar;
