import React,{lazy,Suspense} from 'react';
import Body from './components/Body';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import Layout from './components/Layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';
const  Grocery =lazy(()=>import("./components/Grocery"))
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement:<Error/>,
    
  children:[
  {
    path:"/body",
    element:<Body/>
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path:"contact",
    element:<ContactUs/>
  
  },
  {
path:"grocery",
element:<Suspense fallback={<h1>Loading...</h1>}>
  <Grocery/>
  </Suspense>,
  },
  {
    path:"/body/:resId",
    element:<RestaurantMenu/>
  }
]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
