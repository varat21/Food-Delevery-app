import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { MENU_API } from "./constants";
import useOnlineStatus from "../utils/UseOnlineStatus";

const Body = () => {
  const [top, setTop] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const onlineStatus = useOnlineStatus();

  const RestData = {
    menu: {
      items: [
        {
          name: "Coke",
          qty: 20,
          category: "Drinks",
          sizes: ["Small", "Large"],
          stars: 3.5,
        },
        {
          name: "Pepsi",
          qty: 20,
          category: "Drinks",
          sizes: ["Small", "Large"],
          stars: 3.5,
        },
        {
          name: "Water",
          qty: 20,
          category: "Drinks",
          sizes: ["Small", "Large"],
          stars: 3,
        },
        {
          name: "Hamburger",
          qty: 40,
          category: "Junk Food",
          sizes: ["Small", "Large"],
          stars: 4.5,
        },
        {
          name: "Fries",
          qty: 20,
          category: "Junk Food",
          sizes: ["Small", "Large"],
          stars: 3.5,
        },
        {
          name: "Pizza",
          qty: 20,
          category: "Junk Food",
          sizes: ["Small", "Large"],
          stars: 3.5,
        },
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
    const topRated = RestData.menu.items.filter(
      (restaurant) => restaurant.stars > 4
    );
    setTop(topRated);
    setFilteredRestaurants([]); // Reset search when top-rated is clicked
  };

  useEffect(() => {
    const fetchData = async () => {
      const con_url = MENU_API();
      try {
        const response = await fetch(con_url);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!onlineStatus) {
    return <div>Please! Check Your network connection...</div>;
  }

  return (
    <div className="p-6 w-full bg-gray-100 min-h-screen">
      <input
        className="border border-gray-400 h-10 w-60 rounded-xl"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="bg-gray-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSearchClick}
      >
        Search
      </button>
      <div className="text-center my-6">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleTopRatedClick}
        >
          Show Top Rated
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(top.length > 0
          ? top
          : filteredRestaurants.length > 0
          ? filteredRestaurants
          : RestData.menu.items
        ).map((restaurant, index) => (
          <RestaurantCard
            key={index}
            name={restaurant.name}
            category={restaurant.category}
            sizes={restaurant.sizes}
            stars={restaurant.stars}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
