import React from 'react'

const Item = ({ item }) => {
  return (

      <div className='itemBox rounded-lg bg-white  p-5 mx-14 flex justify-around items-center'>
        <div className="titles">
          <div className="title text-[#393c99] font-bold text-xl">{item}</div>
          <div className="subTitle">{item}</div>
        </div>
        <div className="options flex gap-3">
          <button className='cursor-pointer'><img src="/CheckCircle.png" alt="checkcircle" /></button>
          <button className='cursor-pointer'><img src="/Pencil.png" alt="pencil" /></button>
          <button className='cursor-pointer'><img src="Trash.png" alt="trash" /></button>
        </div>
      </div>


    
  )
}

export default Item
