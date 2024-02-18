import { useState, useEffect } from 'react'
import Navbar from "./components/Navbar"
import ItemContainer from './components/ItemContainer';
import NewItem from './components/NewItem';
import About from './components/About';
import { itemsContext } from './context/context';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [currentDate, setCurrentDate] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [items, setItems] = useState([])
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date().toJSON().slice(0, 10));
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  function handleAddItem(item) {
  
    setItems([...items, {id:uuidv4(), item, isComplete:false}])

  }

  function handleIsComplete(updatedItem){
    console.log(`updatedItem: ${updatedItem.isComplete}, ${updatedItem.id}`)
    
    const itemToBeUpdatedIndex = items.findIndex((item)=>{
     return item.id==updatedItem.id

    })
   
    items[itemToBeUpdatedIndex].isComplete = !items[itemToBeUpdatedIndex].isComplete
 
  }


  useEffect(() => {
    // Log the updated items array whenever it changes
    console.log('Updated Items:', items);
  }, [items]);
  return (
    <>
      <itemsContext.Provider value={{items}}>
      <Navbar />
      <div className="main bg-[#B3B7EE] p-6 min-h-[80vh]">
        <div className="dateTime flex justify-between">
          <div className='date'>{currentDate}</div>
          <div className="time">{currentTime}</div>
        </div>
        <NewItem onAddItem={handleAddItem} />
        <hr />
        <ItemContainer items={items} handleComplete={handleIsComplete}/>
      </div>
      </itemsContext.Provider>
    

    </>
  )
}

export default App
