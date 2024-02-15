import React from 'react'

const NewItem = () => {
  return (
    <div className='newItem m-5 '>
        <form className="flex gap-2 justify-center" id="newItemForm" >
          <input className="p-1 w-60" type="text" name="item" id="" placeholder="Bread...." />
            
            <button className="bg-black text-white px-4 py-2 rounded-2xl"type="submit">Add an item!</button>
        </form>
      
    </div>
  )
}

export default NewItem
