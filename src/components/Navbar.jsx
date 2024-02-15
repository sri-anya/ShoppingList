import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [currentDate, setCurrentDate] = useState();
  const [currentTime, setCurrentTime] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date().toJSON().slice(0, 10));
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <nav className='bg-[#9395D3] text-white flex justify-between'>
        <h1>Shop-Li</h1>
        <div>{currentDate} </div>
        <div>{currentTime}</div>
      </nav>
    </div>
  );
};

export default Navbar;
