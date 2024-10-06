import React from 'react'
import RestaurantCard from './RestaurantCard'

const Body = () => {
  return (
    <div className='p-2 '>
         <div >
        <input placeholder='Search' className="  w-96 h-10 rounded-2xl items-center"/>
    </div>
    <div className='w-[200px] h-[100px] border border-black  mt-4 rounded-xl bg-gray-200'>
        

        <RestaurantCard/>
    </div>
    </div>
  )
}

export default Body