import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings"
import Vote from "./pages/Vote";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import Login from "./pages/Login";
import Signup from "./pages/Signup"

import React, { useEffect, useState } from 'react'
function App() {
  const [isConnected,setIsConnected] = useState(false);
  const [isUser,setIsUser] = useState(false);
  const [user,setUser] = useState({});
  const [restaurant,setRestaurant]=useState({});
  const userConnected = (connected) => {
    setIsConnected(connected);
  }
  const isConnectedHandler = async (user) => {
    setIsUser(user);
    await setIsUser(true);
    localStorage.removeItem("restaurant");
    localStorage.setItem("user", JSON.stringify(user));

  }
  const restaurantHandler=async (restaurant)=>{
    setRestaurant(restaurant);
    await setIsUser(false);
    localStorage.removeItem("user");
    localStorage.setItem("restaurant", JSON.stringify(restaurant));
  }
  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      userConnected(true);
      setIsUser(true);
    }
    else if (localStorage.getItem("restaurant") !== null) {
      userConnected(true);
      setIsUser(false);
    }
    else{
      userConnected(false);
    }
  }, [localStorage.getItem("restaurant"), localStorage.getItem("user")]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home isConnected={isConnected} />} />
          <Route path="/vote" element={<Vote isConnected={isConnected} isUser={isUser}/>} />
          <Route path="/contact" element={<Contact isConnected={isConnected} />} />
          <Route path="/menu" element={<Menu isConnected={isConnected} isUser={isUser} />}  />
          <Route path="/login" element={<Login userConnected={userConnected} isConnected={isConnected} restaurantHandler={restaurantHandler} isConnectedHandler={isConnectedHandler} />} />
          <Route path="/signup" element={<Signup isConnected={isConnected} />} />
          <Route path="/settings" element={<Settings isConnected={isConnected} isUser={isUser} />} />
          <Route path="*" element={<Pagenotfound isConnected={isConnected} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
