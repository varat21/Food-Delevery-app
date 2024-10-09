import React,{useState} from 'react';

const Header = (props) => {
  const [Login, SetLogin] = useState("Login");

  const onClicked = () => {
    Login === "Login" ? SetLogin("Logout") : SetLogin("Login");
  };

  return (
    <div className="p-2">
      <div className="justify-between flex cursor-pointer w-full items-center h-[80px] border border-black rounded-sm">
        <div className="items-center p-2 justify-center">
          <img src="/food.png" alt="Food" className="items-center justify-center w-[100px] h-[60px]" />
        </div>
        <div className="flex gap-1 mb-6">
          <input
            className="border border-gray-400 h-10 w-60 rounded-xl"
            placeholder="Search"
            value={props.searchText}
            onChange={(e) => props.setSearchText(e.target.value)}
          />
          <button

        className="bg-gray-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"   
                 onClick={props.handleSearchClick}
          >
            Search
          </button>
        </div>

        <div>
          <ul className="flex gap-10 font-bold">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <li>
              <button
                className="bg-gray-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={onClicked}
              >
                {Login}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
