import React,{useRef} from 'react'


const Item = ({ item, handleIsComplete }) => {
  const tick = useRef(null);
  const handleCompleteClick = () => {
    // Pass the item information to the handleIsComplete function
  
    handleIsComplete(item);
    if(item.isComplete)
    {
     
    tick.current.style.backgroundColor ="green";
    tick.current.style.borderRadius = "100%";
  }
  else{
    tick.current.style.backgroundColor ="";
    tick.current.style.borderRadius = "100%";
   
   
  }
  };

  return (
      <div className='itemBox rounded-lg bg-white  p-5 mx-14 flex justify-around items-center'>
        <div>
          <input type="checkbox" onChange={handleCompleteClick} name="isComplete" id="itemStatus"/>
        </div>
        <div className={item.isComplete ? "line-through":""}>
          <div className="title text-[#393c99] font-bold text-xl">{item.item.itemName}</div>
          <div className="subTitle">{item.item.detail}</div>
        </div>
        <div className="options flex gap-3">
          <button className='cursor-pointer' ref={tick} ><img src="/CheckCircle.png" alt="checkcircle" /></button>
          <button className='cursor-pointer'><img src="/Pencil.png" alt="pencil" /></button>
          <button className='cursor-pointer'><img src="Trash.png" alt="trash" /></button>
        </div>
        
      </div>
  )
}

export default Item
