import React,{useEffect,useState} from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import UserContext from '../utils/UserContext';
import { Provider } from 'react-redux';
import appStore from '../utils/appStore';
const Layout = () => {
  //context api

  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Varat Thapa",
    };
    setUserName(data.name);
  }, []);
  //context api
  return (
    <div>
      <Provider store={appStore}>   {/*redux tool kit */}
       <UserContext.Provider value={{loggedInUser: userName }}>  {/*context api */}
      <div>
        <Header />
        <Outlet />

      </div>
    </UserContext.Provider>
    </Provider>
    </div>
  );
};

export default Layout;
