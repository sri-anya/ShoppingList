import { useState, useEffect } from 'react'
import Navbar from "./components/Navbar"
import ItemContainer from './components/ItemContainer';
import NewItem from './components/NewItem';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [currentDate, setCurrentDate] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [items, setItems] = useState([])
  const [selectedItems, setselectedItems] = useState([])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date().toJSON().slice(0, 10));
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount
  
  useEffect(()=>{
    setselectedItems(items)
  },[items])
  function handleAddItem(item) {

    setItems([...items, { id: uuidv4(), item, isComplete: false }])

  }

  function handleIsComplete(updatedItem) {
    // console.log(`updatedItem: ${updatedItem.isComplete}, ${updatedItem.id}`)

    const itemToBeUpdatedIndex = items.findIndex((item) => {
      return item.id == updatedItem.id

    })

    items[itemToBeUpdatedIndex].isComplete = !items[itemToBeUpdatedIndex].isComplete

  }

  function handleDelete(itemSelected) {

    const deleteConfirmation = confirm("Are you sure you want to delete this item!");

    if (deleteConfirmation) {
      // Find index of item to be deleted
      const itemToBeDeletedIndex = items.findIndex((item) => item.id === itemSelected.id);

      // Make a copy of the items array and remove the item at the found index
      const updatedItemsList = [...items.slice(0, itemToBeDeletedIndex), ...items.slice(itemToBeDeletedIndex + 1)];


      setItems(updatedItemsList);
    } else {
      // User canceled the deletion
      console.log("Deletion canceled.");
    }
  }

  function handleEdit(itemToBeEdited) {
    console.log(`itemToBeUpdated ${itemToBeEdited.id}`);

    const itemToBeEditedIndex = items.findIndex((item) => item.id === itemToBeEdited.id);

    if (itemToBeEditedIndex !== -1) {
      const newInputName = prompt(`Enter the new item for item with id ${itemToBeEdited.item.itemName}:`, itemToBeEdited.item.itemName);
      const newInputDetail = prompt(`Enter the new details for item with id ${itemToBeEdited.item.itemName}:`, itemToBeEdited.item.detail);

      if (newInputName !== null || newInputDetail !== null) {
        // User did not cancel the prompts
        const updatedItemsList = [...items];
        updatedItemsList[itemToBeEditedIndex] = {
          ...itemToBeEdited,
          item: {
            ...itemToBeEdited.item,
            itemName: newInputName || itemToBeEdited.item.itemName,
            detail: newInputDetail || itemToBeEdited.item.detail
          }
        };

        console.log(updatedItemsList);
        setItems(updatedItemsList);
      } else {
        // User canceled the prompts
        console.log("Editing canceled.");
      }
    } else {
      console.log("Item not found for editing.");
    }
  }
  
  const handleFilterItemsCompleted = () =>{
    const filteredItems = items.filter((item)=>
      
      item.isComplete===true
    )
    console.log(filteredItems)
    if (filteredItems.length!==0){setselectedItems(filteredItems)}
    else{
      console.log("do nothing")
      setselectedItems([])
    }
  }

  const handleFilterItemsRemaining = () =>{
    const filteredItems = items.filter((item)=>
      
      item.isComplete===false
    )
    console.log(filteredItems)
    if (filteredItems.length!==0){setselectedItems(filteredItems)}
    else{
      console.log("do nothing")
      setselectedItems([])
    }
  }

  const handleAllItems = () =>{
    console.log("handleAllItems")
    setselectedItems(items)
  }

  return (
    <>

      <Navbar />

      <div className="main bg-[#B3B7EE] p-6 min-h-[80vh]">
        <div className="dateTime flex justify-between">
          <div className='date'>{currentDate}</div>
          <div className="time">{currentTime}</div>
        </div>
        <NewItem onAddItem={handleAddItem} />
        <hr />
        <h1 className='text-center text-xl font-extrabold text-black my-4'>Your Items</h1>
        <div className="selectors flex justify-around">
          <div className='underline p-2 cursor-pointer' onClick={handleAllItems}>All Items</div>
          <div className="tasks underline p-2 cursor-pointer" onClick={handleFilterItemsRemaining}>Items Remaining</div>
          <div className='underline p-2 cursor-pointer' onClick={handleFilterItemsCompleted}>Items Purchased</div>
        </div>
        <ItemContainer items={selectedItems} handleComplete={handleIsComplete} onDelete={handleDelete} onEdit={handleEdit} />
      </div>



    </>
  )
}

export default App
