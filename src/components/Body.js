import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Header from './header';

const Body = () => {
  const [top, setTop] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const RestData = {
    menu: {
      items: [
        { name: 'Coke', qty: 20, category: 'Drinks', sizes: ['Small', 'Large'], stars: 3.5 },
        { name: 'Pepsi', qty: 20, category: 'Drinks', sizes: ['Small', 'Large'], stars: 3.5 },
        { name: 'Water', qty: 20, category: 'Drinks', sizes: ['Small', 'Large'], stars: 3 },
        { name: 'Hamburger', qty: 40, category: 'Junk Food', sizes: ['Small', 'Large'], stars: 4.5 },
        { name: 'Fries', qty: 20, category: 'Junk Food', sizes: ['Small', 'Large'], stars: 3.5 },
        { name: 'Pizza', qty: 20, category: 'Junk Food', sizes: ['Small', 'Large'], stars: 3.5 },
      ],
    },
  };

  // Handle search
  const handleSearchClick = () => {
    const filterRest = RestData.menu.items.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filterRest);
  };

  // Handle top-rated click
  const handleTopRatedClick = () => {
    const topRated = RestData.menu.items.filter((restaurant) => restaurant.stars > 4);
    setTop(topRated);
    setFilteredRestaurants([]); // Reset search when top-rated is clicked
  };

  return (
    <div className="p-6 w-full bg-gray-100 min-h-screen">
      <Header
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearchClick={handleSearchClick}
      />
      <div className="text-center my-6">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleTopRatedClick}
        >
          Show Top Rated
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Display top-rated restaurants if `top` is populated, else filtered restaurants or all */}
        {(top.length > 0 ? top : filteredRestaurants.length > 0 ? filteredRestaurants : RestData.menu.items).map(
          (restaurant, index) => (
            <RestaurantCard
              key={index}
              name={restaurant.name}
              category={restaurant.category}
              sizes={restaurant.sizes}
              stars={restaurant.stars}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
