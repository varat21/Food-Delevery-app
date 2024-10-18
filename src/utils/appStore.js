
// redux tool kit
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
const appStore = configureStore({
    reducer:{
        cart:cartReducer,
        // user:useReducer
    },

});

export default appStore;