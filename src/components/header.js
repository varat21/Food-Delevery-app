import React from 'react'

const Header = () => {
  return (
    <div className='p-2'>
    <div className="justify-between flex  cursor-pointer w-full items-center h-[80px] border border-black rounded-sm ">
    <div className="  items-center p-2 justify-center">
      <img src="/food.png" alt="Food" className='items-center justify-center  w-[95px]  h-[70px]'/>
    </div>
  
   
    <div>
      <ul className="flex gap-10 font-bold">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
  </div>

  )
}

export default Header