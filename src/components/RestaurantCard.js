import React from 'react';
import { FaStar, FaUtensils } from 'react-icons/fa';

const RestaurantCard = ({ name, category, sizes, stars }) => {
  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-xl p-4 transition-shadow duration-300 transform hover:scale-105">
      <img
        className="h-40 w-full object-cover rounded-md"
        src="https://api.foodmood.com.np/storage/uploads/images/restaurantprofile/638f357a3edbc.jpg"
        alt={name}
      />
      <h3 className="font-bold text-center mt-3 text-lg">{name}</h3>
      <div className="flex items-center justify-center mt-2">
        <FaUtensils className="mr-2 text-gray-500" />
        <h4 className="font-semibold text-gray-600">{category}</h4>
      </div>
      <div className="flex justify-center gap-2 mt-1">
        {sizes.map((size, index) => (
          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {size}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-center mt-2">
        <FaStar className="text-yellow-400" />
        <h4 className="ml-2 font-semibold text-gray-600">{stars} Stars</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
