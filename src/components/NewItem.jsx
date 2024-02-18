import React, { useState } from 'react'

const NewItem = ({ onAddItem }) => {

  const [formData, setFormData] = useState({
    itemName: "",
    detail: ""
  })

  const handleChange = (event) => {

    setFormData((prevFormData) => ({ ...prevFormData, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.itemName.value);
    console.log(e.target.detail.value);
    onAddItem(formData);
    setFormData({itemName:"",detail:""})

  }
  return (
    <div className='newItem '>
      <legend>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 m-4" id="newItemForm" >

          <label htmlFor="itemName">Item:</label>
          <input id="itemName" className="p-2 w-1/4" type="text" name="itemName" placeholder="Peas" onChange={handleChange} value={formData.itemName} required />

          <label htmlFor="itemDetails">Details:</label>
          <textarea id="itemDetails" className="p-2 w-1/4" type="text" name="detail" placeholder="2 lbs" onChange={handleChange} value={formData.detail}></textarea>
          <button className="bg-black w-fit text-white px-4 py-2 rounded-2xl" type="submit">Add an item!</button>

        </form>
      </legend>

    </div>
  )
}

export default NewItem
