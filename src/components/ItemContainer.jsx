import React from 'react'
import Item from './Item';

const ItemContainer = ({ items, handleComplete, onDelete, onEdit}) => {
  

  return (
    <>
    <div className='flex flex-col gap-[21px] m-4'>
      {items.map((item,index) => {
        return <Item key={index} item={item} handleIsComplete={handleComplete} handleDelete={onDelete} handleEdit={onEdit}/>
      }

      )}
    </div>
    </>
    
  )
}

export default ItemContainer
