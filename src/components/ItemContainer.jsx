import React, { useEffect, useContext } from 'react'
import Item from './Item';
import { itemsContext } from '../context/context';

const ItemContainer = ({ items,handleComplete}) => {
  
  //const items = useContext(itemsContext);
  return (
    <>
    <h1 className='text-center text-xl font-extrabold text-black my-4'>Your Tasks</h1>
   
    
    <div className='flex flex-col gap-[21px] m-4'>
      {items.map((item,index) => {
        return <Item key={index} item={item} handleIsComplete={handleComplete}/>
      }

      )}
    </div>
    </>
    
  )
}

export default ItemContainer
