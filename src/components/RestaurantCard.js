import React,{useState} from 'react';
import { FaStar, FaUtensils } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';


const RestaurantCard = ({ restaurant }) => {

  const dispatch =useDispatch();
  const handleClick=(name)=>{
    // dispatch an action
    dispatch(addItem(restaurant));
    console.log(restaurant);


  }
  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-xl p-4 transition-shadow duration-300 transform hover:scale-105">
     
     <button type="button" 
     className=" absolute  px-3 py-2  text-sm font-medium text-center text-white bg-blue-300 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
     onClick={()=>handleClick(restaurant)}>
      Add + 
      </button>

      <img
        className="h-40 w-full object-cover rounded-md"
        src="https://api.foodmood.com.np/storage/uploads/images/restaurantprofile/638f357a3edbc.jpg"
        alt={restaurant.name}
      />
      

      <h3 className="font-bold text-center mt-3 text-lg">{restaurant.name}</h3>
      <div className="flex items-center justify-center mt-2">
        <FaUtensils className="mr-2 text-gray-500" />
        <h4 className="font-semibold text-gray-600">{restaurant.category}</h4>
      </div>
      <div className="flex justify-center gap-2 mt-1">
      {restaurant.sizes && restaurant.sizes.map((size, index) => (
          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {size}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-center mt-2">
        <FaStar className="text-yellow-400" />
        <h4 className="ml-2 font-semibold text-gray-600">{restaurant.stars} Stars</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;

