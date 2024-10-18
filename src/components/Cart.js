// import { useDispatch, useSelector } from "react-redux";
// import { clearCart } from "../utils/cartSlice";

// const Cart = () => {
//     // Get cart items from the Redux store
//     const cartItems = useSelector((store) => store.cart.items);
//     const dispatch = useDispatch();

//     // Clear cart function
//     const handleClickCart = () => {
//         dispatch(clearCart());
//     };

//     // Calculate total price (example logic, adjust according to your actual data)
//     const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.qty), 0);

//     return (
//         <div className="flex justify-center min-h-screen bg-gray-100 p-8">
//             {/* Cart Items Section */}
//             <div className="flex flex-col w-3/5 p-6 bg-white rounded-lg shadow-lg">
//                 <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
//                 {cartItems.length > 0 ? (
//                     <div>
//                         {cartItems.map((item, index) => (
//                             <div key={index} className="flex items-center border-b py-4">
//                                 <img
//                                     className="w-24 h-24 object-cover rounded-lg"
//                                     src={item.image}
//                                     alt={item.name}
//                                 />
//                                 <div className="ml-6 flex-grow">
//                                     <h3 className="text-xl font-semibold">{item.name}</h3>
//                                     <p className="text-gray-600">Category: {item.category}</p>
//                                     <p className="text-gray-600">Sizes: {item.sizes.join(", ")}</p>
//                                     <div className="flex items-center text-yellow-500">
//                                         <span>⭐ {item.stars}</span>
//                                     </div>
//                                 </div>
//                                 <div className="text-right">
//                                     <p className="text-lg font-semibold">Price: Rs {item.price}</p>
//                                 </div>
//                             </div>
//                         ))}
//                         <button
//                             className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//                             onClick={handleClickCart}
//                         >
//                             Clear Cart
//                         </button>
//                     </div>
//                 ) : (
//                     <p className="text-gray-500">Your cart is empty.</p>
//                 )}
//             </div>

//             {/* Order Summary Section */}
//             <div className="w-1/3 p-6 ml-6 bg-white rounded-lg shadow-lg">
//                 <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
//                 <div className="flex justify-between mb-2">
//                     <p className="text-gray-600">Subtotal:</p>
//                     <p className="font-bold">Rs {totalPrice}</p>
//                 </div>
//                 <div className="flex justify-between mb-2">
//                     <p className="text-gray-600">Delivery Charge:</p>
//                     <p className="font-bold">Rs 50</p>
//                 </div>
//                 <div className="flex justify-between text-xl font-bold">
//                     <p>Total:</p>
//                     <p>Rs {totalPrice + 50}</p>
//                 </div>
//                 <button className="mt-6 w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
//                     Proceed to Checkout
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Cart;


import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const [quantity, setQuantity] = useState(1)

    // Get cart items from the Redux store
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    // Clear cart function
    const handleClickCart = () => {
        dispatch(clearCart());
    };

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.qty), 0);

    return (
        <div className="flex flex-col lg:flex-row justify-center items-start min-h-screen bg-gray-100 p-8">
            {/* Cart Items Section */}
            <div className="w-full lg:w-2/3 p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
                {cartItems.length > 0 ? (
                    <div>
                        {cartItems.map((item, index) => (
                            <div key={index} className="flex items-center border-b py-4">
                                <img
                                    className="w-24 h-24 object-cover rounded-lg"
                                    src={item.image}
                                    alt={item.name}
                                />
                                <div className="ml-6 flex-grow">
                                    <h3 className="text-xl font-semibold">{item.name}</h3>
                                    <p className="text-gray-600">Category: {item.category}</p>
                                    <p className="text-gray-600">Size: {item.sizes.join(", ")}</p>
                                    <div className="flex items-center text-yellow-500">
                                        <span>⭐ {item.stars}</span>
                                    </div>
                                </div>
                                <div className="text-right flex gap-7">
                                    <button 

onClick={() => {
    setQuantity(item.quantity + 1)}}
                                    className="bg-gray-400 w-8 text-white font-extrabold rounded-xl" 
                                    
                                    >+ </button>
                                    <p className="text-sm">Qty: {item.qty}</p>
                                    <button className="bg-gray-400 w-8 text-white font-extrabold rounded-xl">- </button>

                                   
                                </div>
                            </div>
                        ))}
                        <button
                            className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                            onClick={handleClickCart}
                        >
                            Clear Cart
                        </button>
                    </div>
                ) : (
                    <p className="text-gray-500">Your cart is empty.</p>
                )}
            </div>

            {/* Order Summary Section */}
            <div className="w-full lg:w-1/3 p-6 mt-6 lg:mt-0 lg:ml-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                <div className="flex justify-between mb-2">
                    <p className="text-gray-600">Subtotal:</p>
                    <p className="font-bold">Rs {totalPrice}</p>
                </div>
                <div className="flex justify-between mb-2">
                    <p className="text-gray-600">Delivery Charge:</p>
                    <p className="font-bold">Rs 50</p>
                </div>
                <div className="flex justify-between text-xl font-bold">
                    <p>Total:</p>
                    <p>Rs {totalPrice + 50}</p>
                </div>
                <button className="mt-6 w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
