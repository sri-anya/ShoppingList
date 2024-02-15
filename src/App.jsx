import { useState, useEffect } from 'react'
import Navbar from "./components/Navbar"
import ItemContainer from './components/ItemContainer';
import NewItem from './components/NewItem';


function App() {
  const [currentDate, setCurrentDate] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [items, setItems] = useState(["a","b"])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date().toJSON().slice(0, 10));
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      <Navbar />
      <div className="main bg-[#B3B7EE] p-6 min-h-[80vh]">
        <div className="dateTime flex justify-between">
          <div className='date'>{currentDate}</div>
          <div className="time">{currentTime}</div>
        </div>
        <NewItem/>

        <ItemContainer items={items}/>
      </div>


    </>
  )
}

export default App
