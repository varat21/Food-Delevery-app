import React,{useContext, useState} from 'react';
import {Link} from 'react-router-dom'
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';


const Header = (props) => {
  const [Login, SetLogin] = useState("Login");
  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);
  
  const onClicked = () => {
    Login === "Login" ? SetLogin("Logout") : SetLogin("Login");
  };
  const cartItems = useSelector((store)=>store.cart.items);

  return (
    <div className="sticky top-0 z-50 bg-gray-300 shadow-md transition-shadow duration-300 p-2 m-1 w-full">
      <div className="justify-between flex cursor-pointer w-full items-center h-[80px] border border-black rounded-sm">
        <div className="items-center p-2 justify-center">
          <img src="/food.png" alt="Food" className="items-center justify-center w-[100px] h-[60px]" />
        </div>
      

        <div>
          <ul className="flex gap-10 font-bold">
            <li>
              <Link to="/">
              Home
              </Link>
              </li>
            <li>
              <Link to="/Contact"> 
              Contact Us
              </Link>
              </li>
            <li>
              <Link to="/Cart">
              Cart-({cartItems.length})
              </Link>
              </li>
            <li>
              <Link to="/about">
              About
              </Link>
              </li>
            <li>
              <Link to="/grocery">
              Grocery
              </Link>
              </li>
            <li>
              <button
                className="bg-gray-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={onClicked}
              >
                {Login}
              </button>
            </li>
            <li>
             {loggedInUser}
              </li>
          </ul>
        </div>
      </div>
   
    </div>
  );
};

export default Header;
