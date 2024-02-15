import React from 'react'

const NewItem = () => {

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e.target)

  }
  return (
    <div className='newItem m-10 '>
      <legend>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 justify-center" id="newItemForm" >
          
          <label for="itemName">Item:</label>
          <input id="itemName" className="p-1 w-full" type="text" name="item" placeholder="Peas" required/>
          <label for="itemDetails">Details:</label>
          <textarea id="itemDetails" className="p-1 w-full" type="text" name="item" placeholder="2 lbs" ></textarea>
        
            
            <button  className="bg-black text-white px-4 py-2 rounded-2xl"type="submit">Add an item!</button>
            
        </form>
        </legend>
      
    </div>
  )
}

export default NewItem
